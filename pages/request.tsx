import { colors } from "@constants/colors";
import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";

type Props = {};

const temp = Array(10)
  .fill("")
  .map(() => ({
    title: "다이나믹 프로그래밍 완전 정복 책 요약 좀 해주세요",
    user: "알고리즘 좋아하는 사람",
    date: "2022.11.05",
  }));

const Request = (props: Props) => {
  const [results, setResults] = useState(temp);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //axios post
    inputRef.current!.value = "";
  };

  return (
    <RequestContainer>
      <RequestForm onSubmit={handleSubmit}>
        <RequestTextArea
          ref={inputRef}
          placeholder="원하는 요약본이 있으면 적어주세요!"
        />
      </RequestForm>
      <Cards>
        {results.map((result) => (
          <CardRow>
            <BookTitle>{result.title}</BookTitle>
            <Description>
              <User>{result.user}</User>
              <Date>{result.date}</Date>
            </Description>
          </CardRow>
        ))}
      </Cards>
    </RequestContainer>
  );
};

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
`;

const RequestForm = styled.form`
  display: inline-flex;
  top: 4rem;
  position: fixed;
`;

const RequestTextArea = styled.input`
  width: 400px;
  height: 100px;
  border-radius: 25px;
  border: 3px solid ${colors.primary};
  text-align: center;
  :focus {
    outline: none;
  }
`;

const Cards = styled.div`
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const CardRow = styled.div`
  width: 85%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #cc9767;
  padding: 0 2rem;
  word-break: keep-all;
`;

const BookTitle = styled.h1`
  font-size: 17px;
`;

const Description = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const User = styled.p`
  font-size: 14px;
`;

const Date = styled.p`
  font-size: 13px;
`;
export default Request;
