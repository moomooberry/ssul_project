import { GetDetailPostResponse } from "@/types/api/post/getDetailPost";
import api from "..";

interface GetDetailPostProps {
  id: string;
}

const getDetailPost = async ({ id }: GetDetailPostProps) => {
  const { data } = await api.get<GetDetailPostResponse>("/post/detail", {
    data: { id },
  });
  return data;
};

export default getDetailPost;
