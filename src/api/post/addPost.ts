import { AddPostResponse } from "@/types/api/post/addPost";
import api from "..";

interface AddPostProps {
  title: string;
  link: string;
  imgSrc?: string;
  hashtags: string[];
  author: string;
  category: "ssul";
}

const addPost = async (props: AddPostProps) => {
  const { data } = await api.post<AddPostResponse>("/post/add", props);
  return data;
};

export default addPost;
