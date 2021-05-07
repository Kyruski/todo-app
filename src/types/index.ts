export interface TodoDataType {
  id: number;
  text: string;
  completed: boolean;
}

export interface Payload {
  type: string;
  text?: string;
  index?: number;
}
