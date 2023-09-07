import styled from "styled-components";

const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ecf4ff;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 780px;
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
  font-weight: 400;
  letter-spacing: -0.54px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffffff;
  width: ${({ $isSticky }) => ($isSticky ? "100vw" : "700px")};
  padding: ${({ $isSticky }) => ($isSticky ? "16px 20px" : "20px 40px")};
  border-radius: ${({ $isSticky }) => ($isSticky ? 0 : "15px")};
  font-size: ${({ $isSticky }) => ($isSticky ? "24px" : "36px")};
  transition: width 1s, padding 1s, border-radius 3s, font-size 1s;

  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
  @media (max-width: 1024px) {
    font-size: ${({ $isSticky }) => ($isSticky ? "20px" : "24px")};
    width: ${({ $isSticky }) => ($isSticky ? `calc(100% + 40px)` : `100%`)};
    padding: ${({ $isSticky }) => ($isSticky ? `15px 40px` : `30px 40px`)};
    border-radius: ${({ $isSticky }) => ($isSticky ? "0px" : "15px")};
    transition: width 1s, padding 1s;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
