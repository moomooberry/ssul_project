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
  box-sizing: border-box;
  padding: 40px;
  align-items: center;
  @media (max-width: 1024px) {
    width: auto;
    padding: 20px;
  }
`;

const Title = styled.h1<{ $isSticky: boolean }>`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.54px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffffff;
  width: 640px;
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
  @media (max-width: 1024px) {
    font-size: ${({ $isSticky }) => ($isSticky ? "20px" : "24px")};
    width: ${({ $isSticky }) =>
      $isSticky ? `calc(100% - 40px)` : `calc(100% - 80px)`};
    padding: ${({ $isSticky }) => ($isSticky ? `15px 40px` : `30px 40px`)};
    border-radius: ${({ $isSticky }) => ($isSticky ? "0px" : "15px")};
    position: sticky;
    top: 0;
    z-index: 2;
    transition: width 1s, padding 1s;
  }
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
