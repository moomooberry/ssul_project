export interface ApiResponse<T> {
  code: number;
  result: T;
}

export interface ApiRequestAccessToken {
  accessToken: string | null;
}

export interface PaginationResponse<K> {
  results: K;
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface PaginationRequest {
  p?: number;
  ps?: number;
}
