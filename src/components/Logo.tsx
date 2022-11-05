import styled from "@emotion/styled";
import React from "react";
import { colors } from "src/constants/colors";

type Props = {};

const Logo = (props: Props) => {
  return <Title>HULTA</Title>;
};

const Title = styled.h1`
  color: ${colors.primary};
  margin: 0;
  font-family: "Fredoka One", cursive;
`;

export default Logo;
