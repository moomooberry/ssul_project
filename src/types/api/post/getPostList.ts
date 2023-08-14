interface GetPostResponse {
  id: string;
  title: string;
  link: string;
  author: string;
  hashtags?: string[];
  imgSrc?: string;
  views: number;
  liked: number;
  created: number;
  category: "ssul";
}

export type GetPostListResponse = Array<GetPostResponse>;
