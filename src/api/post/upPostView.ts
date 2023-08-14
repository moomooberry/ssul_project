import { UpPostViewResponse } from "@/types/api/post/upPostview";
import api from "..";

interface UpPostViewProps {
  id: string;
}

const upPostView = async ({ id }: UpPostViewProps) => {
  const { data } = await api.post<UpPostViewResponse>("/post/view-up", { id });
  return data;
};

export default upPostView;
