import api from "@/api";
import { ApiResponse } from "@/types/api";
import { LoginResponse } from "@/types/api/auth/login";

interface LoginProps {
  id: string;
  password: string;
}

const login = async ({ id, password }: LoginProps) => {
  const {
    data: { result: accessToken },
  } = await api.post<ApiResponse<LoginResponse>>("/auth/login", {
    id,
    password,
  });

  return accessToken;
};

export default login;
