import { colors } from "@constants/colors";
import styled from "@emotion/styled";
import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react";

interface TextInputProps {
  wrapperStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  endAdornment?: ReactElement;
  error?: string;
}

export default function TextInput({
  wrapperStyle,
  inputStyle,
  error,
  endAdornment,
  ...rest
}: TextInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div style={{ width: "100%" }}>
      <Container style={wrapperStyle}>
        <Input style={inputStyle} {...rest} />
        {endAdornment && endAdornment}
      </Container>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 30px;
  border: 3px solid ${colors.primary};
  overflow: hidden;
  display: flex;
  padding: 4px 16px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 48px;
  flex: 1;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${colors.error};
  margin: 10px 4px;
`;
