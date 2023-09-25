import {
  ApiResponse,
  PaginationRequest,
  PaginationResponse,
} from "@/types/api";
import api from "..";
import { GetPostListResponse } from "@/types/api/post/getPostList";
import { CommonCategory } from "@/types/common";

interface GetPostListProps extends PaginationRequest {
  category: CommonCategory | "all";
}

const getPostList = async ({ p = 1, ps = 20, category }: GetPostListProps) => {
  const {
    data: { result },
  } = await api.get<ApiResponse<PaginationResponse<GetPostListResponse>>>(
    "/post",
    {
      params: {
        p,
        ps,
        category,
      },
    }
  );

  return result;
};

export default getPostList;
