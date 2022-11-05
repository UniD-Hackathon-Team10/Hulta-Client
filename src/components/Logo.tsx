import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import { colors } from "src/constants/colors";

type LogoProps = {
  style?: CSSProperties;
};

const Logo = ({ style }: LogoProps) => {
  return <Title style={style}>HULTA</Title>;
};

const Title = styled.h1`
  color: ${colors.primary};
  margin: 0;
  font-family: "Fredoka One", cursive;
`;

export default Logo;
