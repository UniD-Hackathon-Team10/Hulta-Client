import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";
import { colors } from "src/constants/colors";

//import React from "react";

type Props = {};

const temp = Array(10)
  .fill("")
  .map(() => ({
    book_title: "fdsaf",
    summary_author: "fdsafdsa",
    date: "2022.11.05",
    likes: " 하트 수",
  }));

const Request = (props: Props) => {
  const [results, setResults] = useState(temp);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <RequestContainer>
      <PageTitle> 디테일 페이지</PageTitle>
      <p>hello</p>
      {results.map((result) => (
        <CardRow>
          <Book_Title>{result.book_title}</Book_Title>
          <Summary_Author>{result.summary_author}</Summary_Author>
          <Date>{result.date}</Date>
          <Likes>{result.likes}</Likes>
        </CardRow>
      ))}
    </RequestContainer>
  );
  //<div>Request</div>;
};

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
`;

const Logo = styled.h1`
  color: ${colors.primary};
  margin: 0;
  padding-top: 1rem;
  padding-left: 0rem;
`;

const PageTitle = styled.h2`
  width: 240px;
  height: 100px;
  display: flex;
  margin: 0;
  padding-top: 1rem;
  padding-left: 0rem;
`;

const CardRow = styled.div`
  width: 240px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-left: -2rem;
  margin-top: 3rem;
  background-color: #d9d9d9;
`;

const Book_Title = styled.h1`
  width: 143px;
  height: 37px;
  font-size: 17px;
  left: 59px;
  padding-top: 0rem;
  margin-left: 0.2rem;
`;

const Summary_Author = styled.p`
  width: 200px;
  height: 37px;
  font-size: 14px;
  margin-left: 0.2rem;
  margin-top: -2.5px;
`;

const Date = styled.p`
  width: 200px;
  height: 37px;
  font-size: 13px;
  margin-left: 0.2rem;
  margin-top: -2.5px;
`;
const Likes = styled.p`
  width: 143px;
  height: 37px;
  font-size: 17px;
  left: 59px;
  padding-top: 0rem;
  margin-left: 0.2rem;
`;
export default Request;
