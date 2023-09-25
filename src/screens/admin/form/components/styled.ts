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
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.54px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffffff;
  width: 500px;
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px 0 rgba(213, 213, 213, 0.47);
`;

const StlyedLabel = styled.label`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  min-width: 420px;
  padding: 16px;
  border-radius: 15px;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  outline: none;
  &:hover {
    box-shadow: 0 0 0 1px #333344 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #333344 inset;
  }
`;

const HashTagLabel = styled.label`
  min-width: 420px;
  padding: 16px;
  border-radius: 15px;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  outline: none;
  &:hover {
    box-shadow: 0 0 0 1px #333344 inset;
  }
  &:focus {
    box-shadow: 0 0 0 2px #333344 inset;
  }
`;

const HashTagBox = styled.div`
  width: 420px;
  height: 120px;
  border: 1px solid #e3e3e3;
  margin-left: 80px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HashTagDesc = styled.span`
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: gray;
  background-color: #ffe2e4;
  height: 20px;
`;
const HashTagWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 8px 0;
`;

const CategoryBox = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const CategoryBadgeWrapper = styled.div`
  width: 420px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const AdminFormComponents = {
  Layout,
  Container,
  Title,
  Box,
  StlyedLabel,
  StyledInput,
  HashTagLabel,
  HashTagBox,
  HashTagDesc,
  HashTagWrapper,
  CategoryBox,
  CategoryBadgeWrapper,
};

export default AdminFormComponents;
