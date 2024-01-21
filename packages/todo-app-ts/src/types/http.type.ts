export type ReqConfig = {
  url: string
  params?: any
}
export type RespConfig<T> = {
  message: string
  data: T
}
