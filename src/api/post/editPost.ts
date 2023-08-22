import { EditPostResponse } from "@/types/api/post/editPost";
import api from "..";
import { ApiRequestAccessToken, ApiResponse } from "@/types/api";

interface EditPostProps extends ApiRequestAccessToken {
  id: string;
  title: string;
  link: string;
  imgSrc?: string;
  hashtags: string[];
  author: string;
  category: "ssul";
}

const editPost = async ({ id, accessToken, ...props }: EditPostProps) => {
  const {
    data: { result },
  } = await api.put<ApiResponse<EditPostResponse>>(
    "/post/edit",
    {
      id,
      data: props,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return result;
};

export default editPost;
