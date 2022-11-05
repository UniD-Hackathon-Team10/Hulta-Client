import styled from "@emotion/styled";
import React from "react";
import { colors } from "src/constants/colors";

type Props = {};

const Header = (props: Props) => {
  return (
    <Wrapper>
      <Logo>HULTA</Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 4rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  color: ${colors.primary};
  margin: 0;
`;

export default Header;
