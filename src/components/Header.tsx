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
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 450px;
  height: 4rem;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Logo = styled.h1`
  color: ${colors.primary};
  margin: 0;
`;

export default Header;
