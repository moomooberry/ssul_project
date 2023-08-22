import { FC, useCallback } from "react";
import AuthLoginView, {
  AuthLoginFormFields,
  AuthLoginViewProps,
} from "./AuthLoginView";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import login from "@/api/auth/login";
import { useRouter } from "next/router";
import { AxiosError, AxiosResponse } from "axios";
import useAppDispatch from "@/hooks/useAppDispatch";
import { setToken } from "@/store/modules/auth";
import { LoginResponse } from "@/types/api/auth/login";
import { ApiResponse } from "@/types/api";

const AuthLoginController: FC = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (accessToken) => {
      dispatch(setToken(accessToken));
      router.push("/admin");
    },
    onError: (err: AxiosError<ApiResponse<LoginResponse>>) => {
      if (err.isAxiosError) {
        console.log("err", err);
        alert(`${err.response?.data.result}`);
      } else {
        alert("unknown error입니다 ❌");
      }
    },
  });

  const { handleSubmit, register } = useForm<AuthLoginFormFields>();

  const onValid = useCallback<SubmitHandler<AuthLoginFormFields>>(
    ({ id, password }) => {
      loginMutation.mutate({ id, password });
    },
    [loginMutation]
  );

  const viewProps: AuthLoginViewProps = {
    register: {
      id: register("id"),
      password: register("password"),
    },
    onSubmitClick: handleSubmit(onValid),
  };

  return <AuthLoginView {...viewProps} />;
};

export default AuthLoginController;
