import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";
import { colors } from "src/constants/colors";

type Props = {};

const Search = (props: Props) => {
  const [results, setResults] = useState([]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchContainer>
      <SearchBar placeholder="책 검색" ref={inputRef} />
      <SearchResult>
        <h2>검색 결과</h2>
        {results.map(() => (
          <></>
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
  padding-top: 2rem;
`;

const SearchBar = styled.input`
  width: 90%;
  height: 2.5rem;
  border-radius: 2rem;
  padding-left: 1rem;
  border-color: ${colors.primary};
`;

const SearchResult = styled.div`
  width: 90%;
  margin-left: 1rem;
`;

export default Search;
