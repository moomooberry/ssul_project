import { AddPostResponse } from "@/types/api/post/addPost";
import api from "..";
import { ApiRequestAccessToken, ApiResponse } from "@/types/api";
import { CommonCategory } from "@/types/common";

interface AddPostProps extends ApiRequestAccessToken {
  title: string;
  link: string;
  imgSrc?: string;
  hashtags: string[];
  author: string;
  category: CommonCategory;
}

const addPost = async ({ accessToken, ...props }: AddPostProps) => {
  const {
    data: { result },
  } = await api.post<ApiResponse<AddPostResponse>>("/post/add", props, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result;
};

export default addPost;
