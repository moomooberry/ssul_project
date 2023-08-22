import { FC, MouseEventHandler } from "react";
import UI from "./components/styled";
import Button from "@/components/button";
import { UseFormRegisterReturn } from "react-hook-form";

export interface AuthLoginFormFields {
  id: string;
  password: string;
}

export interface AuthLoginViewProps {
  register: {
    [K in keyof AuthLoginFormFields]: UseFormRegisterReturn;
  };
  onSubmitClick: MouseEventHandler<HTMLButtonElement>;
}

const AuthLoginView: FC<AuthLoginViewProps> = ({ register, onSubmitClick }) => (
  <UI.Layout>
    <UI.Container>
      <UI.StyledForm>
        <UI.StyledLabel>
          <UI.StyledSpan>아이디를 입력하세요</UI.StyledSpan>
          <UI.StyledInput autoComplete="username" {...register.id} />
        </UI.StyledLabel>
        <UI.StyledLabel>
          <UI.StyledSpan>비밀번호를 입력하세요</UI.StyledSpan>
          <UI.StyledInput
            type="password"
            autoComplete="current-password"
            {...register.password}
          />
        </UI.StyledLabel>
        <Button text="로그인" onClick={onSubmitClick} />
      </UI.StyledForm>
    </UI.Container>
  </UI.Layout>
);

export default AuthLoginView;
