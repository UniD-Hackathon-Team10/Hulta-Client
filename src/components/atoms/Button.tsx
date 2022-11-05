import { colors } from "@constants/colors";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from "react";

interface ButtonProps {
  label?: string;
  buttonStyle?: CSSProperties;
}

export default function Button({
  label,
  buttonStyle,
  ...props
}: ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <_Button style={buttonStyle} {...props}>
      {label}
    </_Button>
  );
}

const _Button = styled.button`
  padding: 8px 16px;
  background-color: ${colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0, 0.2) 0px 3px 1px -2px, rgb(0, 0, 0, 0.14) 0px 2px 2px 0px, rgb(0, 0, 0, 0.12) 0px 1px 5px 0px;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.26);
  }
`;
