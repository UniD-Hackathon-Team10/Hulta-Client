import styled from "@emotion/styled";
import React from "react";
import {
  HomeIcon,
  PlusIcon,
  UserIcon,
  MagnifyingGlassIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";
import { colors } from "src/constants/colors";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Wrapper>
        <CreateColumn
          onClick={() => {
            router.push("/create");
          }}
        >
          <PlusIcon width={50} height={50} color="white" />
        </CreateColumn>
        <Column
          onClick={() => {
            router.push("/");
          }}
          active={path === "/"}
        >
          <HomeIcon
            width={30}
            height={30}
            color={path === "/" ? colors.primary : colors.secondary}
          />
          메인
        </Column>
        <Column
          onClick={() => {
            router.push("/search");
          }}
          active={path === "/search"}
        >
          <MagnifyingGlassIcon
            width={30}
            height={30}
            color={path === "/search" ? colors.primary : colors.secondary}
          />
          검색
        </Column>
        <Column
          onClick={() => {
            router.push("/request");
          }}
          active={path === "/request"}
        >
          <FlagIcon
            width={30}
            height={30}
            color={path === "/request" ? colors.primary : colors.secondary}
          />
          요청
        </Column>
        <Column
          onClick={() => {
            router.push("/mypage");
          }}
          active={path === "/mypage"}
        >
          <UserIcon
            width={30}
            height={30}
            color={path === "/mypage" ? colors.primary : colors.secondary}
          />
          마이홈
        </Column>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
  box-shadow: rgb(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgb(0, 0, 0, 0.14) 0px 2px 2px 0px, rgb(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

const Column = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: ${({ active }) =>
    active === true ? colors.primary : colors.secondary};
`;

const CreateColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 4rem;
  background-color: ${colors.primary};
  width: 70px;
  height: 70px;
  z-index: 1000;
  transform: translateX(calc(50% - 35px));
  /* border: 1px solid black; */
  border-radius: 10rem;
`;

export default NavBar;
