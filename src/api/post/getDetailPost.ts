import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import api from "..";
import { ApiRequestAccessToken, ApiResponse } from "@/types/api";

interface GetDetailPostProps extends ApiRequestAccessToken {
  id: string;
}

const getDetailPost = async ({ id, accessToken }: GetDetailPostProps) => {
  const {
    data: { result },
  } = await api.get<ApiResponse<GetDetailPostResponse>>("/post/detail", {
    params: {
      id,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
};

export default getDetailPost;
