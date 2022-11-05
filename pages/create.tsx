import React, { useCallback, useRef, useState } from "react";
import {
  HomeIcon,
  PlusIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import styled from "@emotion/styled";
import TextInput from "@components/atoms/TextInput";
import { colors } from "@constants/colors";
import { keyframes } from "@emotion/react";
type Props = {};

const Create = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const [result, setResult] = useState([
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
    {
      title: "fjdkasl;f",
    },
  ]);
  const [value, setValue] = useState({});

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onClickOption = useCallback(
    (value: any) => () => {
      setValue(value);
      setOpen(false);
    },
    [setValue]
  );

  return (
    <CreateContainer>
      <TextInput
        endAdornment={
          <MagnifyingGlassIcon width={30} height={30} color={colors.primary} />
        }
        placeholder="책을 검색하세요"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
        }}
      />
      {open && (
        <OptionContainer>
          {result.map((res) => (
            <Option onClick={onClickOption(res)}>{res.title}</Option>
          ))}
        </OptionContainer>
      )}
      <SummaryTextArea placeholder="책을 요약해주세요" ref={textAreaRef} />
      <Footer>
        <SubmitButton>제출하기</SubmitButton>
      </Footer>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  position: relative;
  height: 80vh;
`;

const CreateInput = styled.input``;

const OptionContainer = styled.ul`
  list-style-type: none;
  background-color: ${colors.white};
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
  top: 60px;
  left: 40px;
  padding: 10px 20px;
  width: 80%;
  height: 200px;
  overflow-y: scroll;
`;

const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Option = styled.li`
  font-size: 15px;
  color: ${colors.text_primary};
  padding: 10px 0;
  animation: ${growDown} 300ms ease-in-out;
`;

const SummaryTextArea = styled.textarea`
  margin-top: 50px;
  width: 100%;
  height: 300px;
  border: 2px solid ${colors.primary};
  text-align: center;
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${colors.primary};
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 20px;
`;

export default Create;
