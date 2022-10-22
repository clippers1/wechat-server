export enum Code {
  'success' = 0,
  'error' = 1
}

export interface IResponse {
  code?: Code
  data?: any
  message?: string
}