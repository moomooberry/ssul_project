import { FC } from "react";
import AuthLoginView, { AuthLoginViewProps } from "./AuthLoginView";

const AuthLoginController: FC = () => {
  const viewProps: AuthLoginViewProps = {};

  return <AuthLoginView {...viewProps} />;
};

export default AuthLoginController;
