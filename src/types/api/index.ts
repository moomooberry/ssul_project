export interface ApiResponse<T> {
  code: number;
  result: T;
}

export interface ApiRequestAccessToken {
  accessToken: string | null;
}
