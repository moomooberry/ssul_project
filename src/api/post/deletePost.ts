import { DeletePostResponse } from "@/types/api/post/deletePost";
import api from "..";
import { ApiRequestAccessToken, ApiResponse } from "@/types/api";

interface DeletePostProps extends ApiRequestAccessToken {
  id: string;
}

const deletePost = async ({ id, accessToken }: DeletePostProps) => {
  const {
    data: { result },
  } = await api.delete<ApiResponse<DeletePostResponse>>("/post/delete", {
    data: { id },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
};

export default deletePost;
