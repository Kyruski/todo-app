export interface TodoDataType {
  todoText: string;
  completed: boolean;
}

export interface Payload {
  type: string;
  text?: string;
  index?: number;
}