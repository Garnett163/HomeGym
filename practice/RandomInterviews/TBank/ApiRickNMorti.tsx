import { useState, useEffect } from 'react';

async function getPeople(name, page = 1, options = {}) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`, options);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default function ApiRickNMorti() {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function searchFetch(name, page = 1, signal) {
    if (!name.trim()) {
      setError('');
      setCharacters([]);
      return;
    }

    try {
      setLoading(true);
      const data = await getPeople(name, page, {
        signal,
      });

      setCharacters(data.results);
    } catch (error) {
      if (error.name === 'AbortError') {
        return;
      }

      setCharacters([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setName(e.target.value);
    // searchFetch(e.target.value);
  }

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(() => {
      searchFetch(name, 1, controller.signal);
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <div>
        <ul>
          {characters &&
            characters.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
