import { VerificationResponse } from "@/types/api/auth/verification";
import api from "..";
import { ApiResponse } from "@/types/api";

interface VerificationProps {
  refreshToken?: string;
}

const verification = async ({ refreshToken }: VerificationProps) => {
  const {
    data: { result: isVerificated },
  } = await api.get<ApiResponse<VerificationResponse>>("/auth/verification", {
    headers: {
      Authorization: `Bearer ${refreshToken ?? ""}`,
    },
  });

  return isVerificated;
};

export default verification;
