import styled from "@emotion/styled";
import React from "react";
import {
  HomeIcon,
  PlusIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { colors } from "src/constants/colors";
import { useRouter } from "next/router";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Wrapper>
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
        <PlusIcon
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

export default NavBar;
