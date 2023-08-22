import { UpPostViewResponse } from "@/types/api/post/upPostview";
import api from "..";
import { ApiResponse } from "@/types/api";

interface UpPostViewProps {
  id: string;
}

const upPostView = async ({ id }: UpPostViewProps) => {
  const {
    data: { result },
  } = await api.post<ApiResponse<UpPostViewResponse>>("/post/view-up", { id });

  return result;
};

export default upPostView;
