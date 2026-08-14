export interface WorkerRequest {
  type: 'start';
  message: string;
}

export interface WorkerResponse {
  success: boolean;
  message: string;
}
