export interface GetDetailPostResponse {
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
