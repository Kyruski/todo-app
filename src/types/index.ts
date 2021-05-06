export interface TodoDataType {
  text: string;
  completed: boolean;
}

export interface Payload {
  type: string;
  text?: string;
  index?: number;
}
