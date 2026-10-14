'use client';

import { useEffect, useRef, useState } from 'react';
// import './App.css';

type Props = {
  customStyle: {
    [key: string]: string;
  };
};

const Header = ({ customStyle }: Props) => {
  return <div style={customStyle}>Показываем в консоли актуальное значение counter каждую секунду</div>;
};

function App() {
  const [counter, setCounter] = useState(0);

  const counterRef = useRef(counter);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(counterRef.current);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <Header customStyle={{ color: 'black' }} />

      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>increment</button>

      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
}

export default App;
