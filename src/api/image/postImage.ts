import { ApiResponse } from "@/types/api";
import api from "..";
import { PostImageResponse } from "@/types/api/image";

interface AddImageProps {
  file: File;
}

const postImage = async ({ file }: AddImageProps) => {
  const formData = new FormData();
  // 여기 이름이랑 서버 multer 이름 일치해야함
  formData.append("image", file);
  const {
    data: { result },
  } = await api.post<ApiResponse<PostImageResponse>>("/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result;
};

export default postImage;
