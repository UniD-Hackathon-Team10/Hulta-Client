import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";
import { colors } from "src/constants/colors";

//import React from "react";

type Props = {};

const temp = Array(10).fill('').map(() => (
  {
    title: "fdsaf",
    summary: "fdsafdsa",
    date: "2022.11.05"
  }
))

const Request = (props: Props) => {
  const [results, setResults] = useState(temp);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <RequestContainer>
      <Logo>HULTA</Logo>
      
      <PageTitle> 요청 페이지</PageTitle>
      
      {
        results.map((result) => (
          <CardRow>
          <BookTitle>{result.title}</BookTitle>
          <BookSummary>{result.summary}</BookSummary>
          <Date>{result.date}</Date>
        </CardRow>
        ))
      }
      
      
      

    </RequestContainer>
    
  )
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
  margin-top : 3rem;
  background-color: #D9D9D9;
`;

const BookTitle = styled.h1`
  width: 143px;
  height: 37px;
  font-size : 17px;
  left: 59px;
  padding-top: 0rem;
  margin-left : 0.2rem;
`;

const BookSummary = styled.p`
  width: 200px;
  height: 37px;
  font-size : 14px;
  margin-left : 0.2rem;
  margin-top : -2.5px;
`;

const Date = styled.p`
  width: 200px;
  height: 37px;
  font-size : 13px;
  margin-left : 0.2rem;
  margin-top : -2.5px;
`;
export default Request;
