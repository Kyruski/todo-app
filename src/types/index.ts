export interface TodoDataType {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Payload {
  type: string;
  title?: string;
  description?: string;
  index?: number;
}
