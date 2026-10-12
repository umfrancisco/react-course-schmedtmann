declare type State = {
  count: number;
  step: number;
}

declare type Action = {
  type: string;
  payload?: number;
}