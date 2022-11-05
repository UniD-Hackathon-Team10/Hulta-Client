import { useRouter } from "next/router";
import Card from "@components/Card";
import { HeartIcon } from "@heroicons/react/24/solid";
import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";
import { colors } from "src/constants/colors";

type Props = {};

const temp = Array(10)
  .fill("")
  .map(() => ({
    image: "https://picsum.photos/200/300",
    book_title: "책이름",
    summary_author: "요약본 저자",
    date: "작성 날짜 : 2022.11.05",
    likes: " 하트 수",
    likes_image: "https://www.flaticon.com/free-icon/heart_833472",
  }));

const DetailBook = (props: Props) => {
  const [results, setResults] = useState(temp);
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <RequestContainer>
      <PageTitle>카테고리</PageTitle>
      <CardRowLine></CardRowLine>
      {results.map((result) => (
        <CardRow>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SummaryImage src={result.image} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Book_Title>{result.book_title}</Book_Title>
            <Summary_Author>{result.summary_author}</Summary_Author>
            <Date>{result.date}</Date>
            <Likes>{result.likes}</Likes>
            <div style={{ width: "90%" }}>
              <HeartIcon width={30} height={30} />
            </div>
          </div>
        </CardRow>
      ))}
      <div>{router.query.bookid}</div>
    </RequestContainer>
  );
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

const PageTitle = styled.h3`
  width: 240px;
  height: 100px;
  display: flex;
  margin-left: -9rem;
  padding-top: -6rem;
  padding-left: 0rem;
`;

const CardRowLine = styled.div`
  width: 400px;
  height: 2px;
  display: flex;
  flex-direction: column;
  //margin-left: 4rem;
  margin-top: -2.5rem;
  background-color: black;
`;
const CardRow = styled.div`
  width: 349px;
  height: 214px;
  display: flex;

  margin-left: -2rem;
  margin-top: 4rem;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #d7f4cf;
`;

const Book_Title = styled.h1`
  width: 90%;
  height: 37px;
  font-size: 17px;
`;

const SummaryImage = styled.img`
  width: 133px;
  height: 185px;
  margin-left: 1.9rem;
`;
const Likes_image = styled.img`
  width: 40px;
  height: 30px;
`;

const Summary_Author = styled.p`
  width: 90%;
  height: 37px;
  font-size: 14px;
`;

const Date = styled.p`
  width: 90%;
  height: 37px;
  font-size: 13px;
`;
const Likes = styled.p`
  width: 90%;
  height: 37px;
  font-size: 17px;
`;
export default DetailBook;
