import styled from "styled-components";

const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ecf4ff;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledSpan = styled.span`
  margin-left: 4px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 360px;
  padding: 16px;
  border-radius: 15px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #e3e3e3;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
  &:hover {
    box-shadow: 0 0 0 1px #333344 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #333344 inset;
  }
`;

const AuthLoginComponents = {
  Layout,
  Container,
  StyledForm,
  StyledSpan,
  StyledLabel,
  StyledInput,
};

export default AuthLoginComponents;
