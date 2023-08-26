import { EditPostResponse } from "@/types/api/post/editPost";
import api from "..";
import { ApiRequestAccessToken, ApiResponse } from "@/types/api";
import { CommonCategory } from "@/types/common";

interface EditPostProps extends ApiRequestAccessToken {
  id: string;
  title: string;
  link: string;
  imgSrc?: string;
  hashtags: string[];
  author: string;
  category: CommonCategory;
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
