import { FC, useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type Comment = {
  id: number;
  body: string;
};

const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!response.ok) throw new Error('Ошибка загрузки пользователя');
  return response.json();
};

const fetchComments = async (
  userId: number,
  page: number,
  limit: number = 1,
): Promise<{ comments: Comment[]; total: number }> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${userId}&_page=${page}&_limit=${limit}`,
  );
  if (!response.ok) throw new Error('Ошибка загрузки комментариев');

  const total = Number(response.headers.get('X-Total-Count'));
  const comments = await response.json();

  return { comments, total };
};

// Начало рефакторинга
const UserProfile: FC<{ userId: number }> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    setLoading(true);

    Promise.all([fetchUser(userId), fetchComments(userId, page)])
      .then(([userData, { comments: commentsData, total }]) => {
        setUser(userData);
        setComments(commentsData);
        setTotalPages(total);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [userId, page]);

  if (loading) return <p>Загрузка...</p>;
  if (!user) return <p>Пользователь не найден</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>

      <h3>Комментарии:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>

      <>
        <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>
          Назад
        </button>
        <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>
          Вперёд
        </button>
      </>
    </div>
  );
};
// Конец рефакторинга

export default () => <UserProfile userId={1} />;

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type Comment = {
  id: number;
  body: string;
};

type UserProfileProps = {
  userId: number;
};

const COMMENTS_LIMIT = 5;

const fetchUser = async (userId: number, signal?: AbortSignal): Promise<User> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });

  if (!response.ok) {
    throw new Error('Ошибка загрузки пользователя');
  }

  return response.json();
};

const fetchComments = async (
  userId: number,
  page: number,
  limit: number,
  signal?: AbortSignal,
): Promise<{ comments: Comment[]; total: number }> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${userId}&_page=${page}&_limit=${limit}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error('Ошибка загрузки комментариев');
  }

  const comments: Comment[] = await response.json();
  const total = Number(response.headers.get('X-Total-Count') ?? 0);

  return { comments, total };
};

const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isUserLoading, setIsUserLoading] = useState(true);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  const [userError, setUserError] = useState<string | null>(null);
  const [commentsError, setCommentsError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadUser = async () => {
      try {
        setIsUserLoading(true);
        setUserError(null);

        const userData = await fetchUser(userId, controller.signal);

        setUser(userData);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        setUser(null);
        setUserError('Не удалось загрузить пользователя');
      } finally {
        if (!controller.signal.aborted) {
          setIsUserLoading(false);
        }
      }
    };

    loadUser();

    return () => controller.abort();
  }, [userId]);

  useEffect(() => {
    setPage(1);
  }, [userId]);

  useEffect(() => {
    const controller = new AbortController();

    const loadComments = async () => {
      try {
        setIsCommentsLoading(true);
        setCommentsError(null);

        const { comments, total } = await fetchComments(userId, page, COMMENTS_LIMIT, controller.signal);

        setComments(comments);
        setTotalPages(Math.max(1, Math.ceil(total / COMMENTS_LIMIT)));
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        setComments([]);
        setCommentsError('Не удалось загрузить комментарии');
      } finally {
        if (!controller.signal.aborted) {
          setIsCommentsLoading(false);
        }
      }
    };

    loadComments();

    return () => controller.abort();
  }, [userId, page]);

  if (isUserLoading) {
    return <p>Загрузка пользователя...</p>;
  }

  if (userError || !user) {
    return <p>{userError ?? 'Пользователь не найден'}</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>

      <h3>Комментарии:</h3>

      {isCommentsLoading ? (
        <p>Загрузка комментариев...</p>
      ) : commentsError ? (
        <p>{commentsError}</p>
      ) : comments.length === 0 ? (
        <p>Комментариев нет</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      )}

      <button
        type="button"
        disabled={page <= 1 || isCommentsLoading}
        onClick={() => setPage(prev => Math.max(1, prev - 1))}
      >
        Назад
      </button>

      <button
        type="button"
        disabled={page >= totalPages || isCommentsLoading}
        onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
      >
        Вперёд
      </button>
    </div>
  );
};

const App = () => {
  return <UserProfile userId={1} />;
};

export default App;
