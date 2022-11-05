import Card from "@components/Card";
import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";
import { colors } from "src/constants/colors";

type Props = {};

const Temp = Array(50)
  .fill("")
  .map((arr) => ({
    image: "https://picsum.photos/200/300",
    title: "테스트입니다",
    author: "복돌복돌",
  }));

const Search = (props: Props) => {
  const [results, setResults] = useState(Temp);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchContainer>
      <SearchBar placeholder="책 검색" ref={inputRef} />
      <SearchTitle>검색 결과</SearchTitle>
      <SearchResult>
        {results.map((result) => (
          <Card
            image={result.image}
            title={result.title}
            author={result.author}
          />
        ))}
      </SearchResult>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchTitle = styled.h1`
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;

const SearchBar = styled.input`
  width: 90%;
  height: 4rem;
  border-radius: 2rem;
  border-color: ${colors.primary};
  text-align: center;
  font-size: 1.2rem;
`;

const SearchResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: start;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 7rem;
  padding-left: 3rem;
`;

export default Search;
