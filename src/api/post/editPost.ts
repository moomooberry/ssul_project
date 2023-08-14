import { EditPostResponse } from "@/types/api/post/editPost";
import api from "..";

interface EditPostProps {
  id: string;
  title: string;
  link: string;
  imgSrc?: string;
  hashtags: string[];
  author: string;
  category: "ssul";
}

const editPost = async ({ id, ...props }: EditPostProps) => {
  const { data } = await api.put<EditPostResponse>("/post/edit", {
    id,
    data: props,
  });
  return data;
};

export default editPost;
