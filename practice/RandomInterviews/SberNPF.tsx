'use client';
import React, { useEffect, PropsWithChildren, FC, useState } from 'react';

/** Бизнес задача - должен отображаться профиль с возможностью редактирования
 * должно быть предустановлено имя которое приходит с бека,
 * так же должен отображаться список заказов, верстка должна быть семантичной
 *
 * Задача - провести ревью, найти все артефакты, разобраться с багом, оптимизировать
 */

type IUser = {
  name: string;
};

type IOrder = {
  id: string;
  amount: number;
};

async function getUser(): Promise<IUser> {
  const response = await fetch('/v1/get-user-profile');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

async function getOrders(): Promise<IOrder[]> {
  const response = await fetch('/v1/get-orders');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();

  const orders: IOrder[] = await response.json();

  return orders.map(order => ({
    ...order,
    id: crypto.randomUUID(),
  }));
}

const ProfilePage: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getUser(), getOrders()])
      .then(([userData, ordersData]) => {
        setUser(userData);
        setOrders(ordersData);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUser(prev => ({ ...prev, name: value }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/v1/save-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(() => alert('Сохранено'))
      .catch(() => alert('Не удалось сохранить'));
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '16px' }}>
      <h1>Профиль</h1>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          {user && (
            <form onSubmit={handleSave}>
              <input value={user.name} onChange={handleNameChange} />
              <button type="submit">Сохранить</button>
            </form>
          )}
          <OrderList orders={orders} />
        </>
      )}
      {children}
    </div>
  );
};

interface IOrderListProps {
  orders: IOrder[];
}

function OrderList({ orders }: IOrderListProps) {
  return (
    <section>
      <h2>Заказы</h2>
      <p>Тут отобразятся ваши заказы</p>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>
              <span>{order.id}:</span> <span>{order.amount} ₽</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(OrderList);
