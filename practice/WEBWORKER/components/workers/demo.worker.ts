import type { WorkerRequest, WorkerResponse } from '@/practice/WEBWORKER/types/worker';

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const { message } = event.data;

  // Imitation hard work
  for (let i = 0; i < 3_000_000_000; i++) {}

  const response: WorkerResponse = {
    success: true,
    message: `Worker успешно завершил работу! Получено сообщение:"${message}". Ответ отправлен обратно в главный поток.`,
  };

  self.postMessage(response);
};

export {};
