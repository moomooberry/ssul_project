import { ApiResponse } from "@/types/api";
import api from "..";
import { GetAccessTokenResponse } from "@/types/api/auth/getAccesToken";

interface GetAccessTokenProps {
  refreshToken?: string;
}

const getAccessToken = async ({ refreshToken }: GetAccessTokenProps) => {
  const {
    data: { result },
  } = await api.get<ApiResponse<GetAccessTokenResponse>>("/auth/accessToken", {
    headers: {
      Authorization: `Bearer ${refreshToken ?? ""}`,
    },
  });

  return result;
};

export default getAccessToken;
