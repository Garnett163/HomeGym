'use client';

import { useWorker } from '@/practice/WEBWORKER/hooks/useWorker';

export default function WebWorker() {
  const { runWorker, result } = useWorker();

  return (
    <div>
      <button onClick={() => runWorker('Hello from React 🚀')}>Start Worker</button>
      <p>{result?.message ?? "Web Worker hasn't worked yet."}</p>
    </div>
  );
}
