import { ApiResponse } from "@/types/api";
import api from "..";
import { GetPostListResponse } from "@/types/api/post/getPostList";

const getPostList = async () => {
  const {
    data: { result },
  } = await api.get<ApiResponse<GetPostListResponse>>("/post");

  return result;
};

export default getPostList;
