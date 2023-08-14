import { DeletePostResponse } from "@/types/api/post/deletePost";
import api from "..";

interface DeletePostProps {
  id: string;
}

const deletePost = async ({ id }: DeletePostProps) => {
  const { data } = await api.delete<DeletePostResponse>("/post/delete", {
    data: { id },
  });
  return data;
};

export default deletePost;
