import { FC } from "react";
import UI from "./components/styled";
import Button from "@/components/button";

export interface AuthLoginViewProps {}

const AuthLoginView: FC<AuthLoginViewProps> = ({}) => (
  <UI.Layout>
    <UI.Container>
      <UI.StyledForm>
        <UI.StyledLabel>
          <UI.StyledSpan>아이디를 입력하세요</UI.StyledSpan>
          <UI.StyledInput autoComplete="username" />
        </UI.StyledLabel>
        <UI.StyledLabel>
          <UI.StyledSpan>비밀번호를 입력하세요</UI.StyledSpan>
          <UI.StyledInput type="password" autoComplete="current-password" />
        </UI.StyledLabel>
        <Button text="로그인" />
      </UI.StyledForm>
    </UI.Container>
  </UI.Layout>
);

export default AuthLoginView;
