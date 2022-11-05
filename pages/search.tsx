import TextInput from "@components/atoms/TextInput";
import Card from "@components/Card";
import styled from "@emotion/styled";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "@constants/colors";
import axiosInstance from "@utils/axios";

type Props = {};

const Search = (props: Props) => {
  const [results, setResults] = useState<any[]>([]);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (!searchWord) {
      setResults([]);
      return;
    }
    (async () => {
      const {
        data: {
          body: { posts },
        },
      } = await axiosInstance.get(`/api/v1/article/search/${searchWord}`);
      console.log(posts);
      setResults(posts);
    })();
  }, [searchWord]);

  return (
    <SearchContainer>
      {/* <SearchBar placeholder="책 검색" ref={inputRef} /> */}
      <TextInput
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="책 검색"
        endAdornment={<MagnifyingGlassIcon width={30} height={30} color={colors.primary} />}
        inputStyle={{ fontSize: "1.1rem" }}
        wrapperStyle={{
          maxWidth: "450px",
          position: "fixed",
          backgroundColor: "white",
        }}
      />
      <SearchTitle>검색 결과</SearchTitle>
      <SearchResult>
        {results.map((result) => (
          <Card image={result.bookThumbnail} title={result.bookTitle} author={result.nickname} id={result.articleNo} />
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

const SearchResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
`;

export default Search;
