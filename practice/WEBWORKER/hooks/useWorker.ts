import { useCallback, useEffect, useRef, useState } from 'react';

import type { WorkerRequest, WorkerResponse } from '@/practice/WEBWORKER/types/worker';

export function useWorker() {
  const workerRef = useRef<Worker | null>(null);

  const [result, setResult] = useState<WorkerResponse | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../workers/demo.worker.ts', import.meta.url));

    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      setResult(event.data);
    };

    workerRef.current = worker;

    return () => {
      worker.terminate();
    };
  }, []);

  const runWorker = useCallback((message: string) => {
    const request: WorkerRequest = {
      type: 'start',
      message,
    };

    workerRef.current?.postMessage(request);
  }, []);

  return {
    runWorker,
    result,
  };
}
