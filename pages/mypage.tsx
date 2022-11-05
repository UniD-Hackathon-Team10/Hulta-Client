import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { useState } from "react";
import { colors } from "src/constants/colors";

const name = "테스트";
const email = "test@test.com";

enum TAB {
  wrote,
  liked,
}

const MyPage = () => {
  const [active, setActive] = useState(TAB.wrote);

  return (
    <Container>
      <MyPageHeader>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </MyPageHeader>
      <MyPageContent>
        <Categories>
          <Category
            onClick={() => {
              setActive(TAB.wrote);
            }}
            isActive={active === TAB.wrote}
          >
            작성한 요약 글
          </Category>
          <Category
            onClick={() => {
              setActive(TAB.liked);
            }}
            isActive={active === TAB.liked}
          >
            좋아요 게시글
          </Category>
        </Categories>
      </MyPageContent>
    </Container>
  );
};

const Container = styled.div``;

const MyPageHeader = styled.div`
  width: 100%;
  max-width: 450px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  align-items: left;
  justify-content: center;
  gap: 1rem;
`;

const UserName = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
`;

const UserEmail = styled.p`
  font-size: 10px;
  color: #a3a1a1;
`;

const MyPageContent = styled.div``;

const Categories = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: #d9d9d9;
`;

const Category = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  color: ${({ isActive }) => isActive && colors.primary};
`;

export default MyPage;
