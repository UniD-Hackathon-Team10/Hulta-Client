import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <SearchContainer>
      <SearchBar placeholder="책 검색" />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 2rem;
`;

export default Search;
