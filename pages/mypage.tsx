import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { colors } from "src/constants/colors";
import Card from "@components/Card";
import Image from "next/image";

enum TAB {
  wrote,
  liked,
}

const name = "테스트";
const email = "test@test.com";

const TempWrote = Array(50)
  .fill("")
  .map((arr, i) => ({
    image: "https://picsum.photos/200/301",
    title: "전공책",
    author: "복돌복돌",
    id: i,
  }));

const TempLiked = Array(50)
  .fill("")
  .map((arr, i) => ({
    image: "https://picsum.photos/300/300",
    title: "좋은책",
    author: "복돌복돌",
    id: i,
  }));

const MyPage = () => {
  const [active, setActive] = useState(TAB.wrote);

  return (
    <Container>
      <MyPageHeader>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <UserCircleIcon width={140} /> */}
          <img
            width={130}
            height={130}
            src="https://picsum.photos/300/300"
            style={{ borderRadius: 150 }}
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </div>
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
        <Cards>
          {active === TAB.wrote &&
            TempWrote.map((data) => (
              <Card
                image={data.image}
                title={data.title}
                author={data.author}
                id={data.id}
              />
            ))}
          {active === TAB.liked &&
            TempLiked.map((data) => (
              <Card
                image={data.image}
                title={data.title}
                author={data.author}
                id={data.id}
              />
            ))}
        </Cards>
      </MyPageContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: scroll;
  height: 100vh;
`;

const MyPageHeader = styled.div`
  width: 100%;
  max-width: 450px;
  height: 150px;
  display: flex;
  /* flex-direction: column; */
  /* padding-left: 3rem; */
  align-items: left;
  justify-content: space-between;
  gap: 1rem;
`;

const UserName = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #a3a1a1;
`;

const MyPageContent = styled.div``;

const Categories = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  height: 40px;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #ededed;
`;

const Category = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  color: ${({ isActive }) => isActive && colors.primary};
  ${(p) =>
    p.isActive &&
    css`
      font-weight: 600;
      color: ${colors.primary};
      :after {
        content: "";
        position: absolute;
        bottom: -11.5px;
        width: 150px;
        height: 2px;
        border-radius: 9999px;
        background: ${colors.primary};
      }
    `}
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-bottom: 7rem;
`;

export default MyPage;
