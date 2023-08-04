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
  flex-direction: column;
  // background-color: #ffffff;
  box-sizing: border-box;
  padding: 40px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const HomeComponents = {
  Layout,
  Container,
  Title,
  CardWrapper,
};

export default HomeComponents;
