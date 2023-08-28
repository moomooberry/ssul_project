import {
  ApiResponse,
  PaginationRequest,
  PaginationResponse,
} from "@/types/api";
import api from "..";
import { GetPostListResponse } from "@/types/api/post/getPostList";

interface GetPostListProps extends PaginationRequest {}

const getPostList = async ({ p = 1, ps = 20 }: GetPostListProps) => {
  const {
    data: { result },
  } = await api.get<ApiResponse<PaginationResponse<GetPostListResponse>>>(
    "/post",
    {
      params: {
        p,
        ps,
      },
    }
  );

  return result;
};

export default getPostList;
