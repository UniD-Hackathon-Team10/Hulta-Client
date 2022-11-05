import styled from "@emotion/styled";
import React from "react";
import {
  HomeIcon,
  PlusIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { colors } from "src/constants/colors";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Wrapper>
      <Column>
        <HomeIcon width={30} height={30} color={colors.primary} />
        메인
      </Column>
      <Column>
        <MagnifyingGlassIcon width={30} height={30} color={colors.primary} />
        검색
      </Column>
      <Column>
        <PlusIcon width={30} height={30} color={colors.primary} />
        요청
      </Column>
      <Column>
        <UserIcon width={30} height={30} color={colors.primary} />
        마이홈
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px 20px 0px 0px;
  background: #ffffff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  color: ${colors.primary};
`;

export default NavBar;
