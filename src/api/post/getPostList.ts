import api from "..";
import { GetPostListResponse } from "@/types/api/post/getPostList";

const getPostList = async () => {
  const { data } = await api.get<GetPostListResponse>("/post");
  return data;
};

export default getPostList;
