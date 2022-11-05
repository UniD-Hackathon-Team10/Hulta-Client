import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/24/solid";
import styled from "@emotion/styled";
import React, { LegacyRef, useRef, useState } from "react";

const temp = {
  image: "https://picsum.photos/200/300",
  book_title: "IT 트렌드 2023",
  summary_author: "홍길동",
  date: "작성 날짜 : 2022.11.05",
  likes: " 하트 수",
  likes_image: "https://www.flaticon.com/free-icon/heart_833472",
  summary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const DetailBook = () => {
  const [result, setResults] = useState(temp);
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <RequestContainer>
      <PageTitle>카테고리</PageTitle>
      <CardRowLine />
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
            width: "50%",
            gap: "1rem",
          }}
        >
          <Book_Title>{result.book_title}</Book_Title>
          <Summary_Author>{result.summary_author}</Summary_Author>
          <Date>{result.date}</Date>
          <Likes>{result.likes}</Likes>
          <div style={{ width: "100%" }}>
            <HeartIcon width={30} height={30} />
          </div>
        </div>
      </CardRow>
      <CardRowLine />
      <PageTitle>요약</PageTitle>
      <CardRowLine />
      <SummarySubtitle>
        {result.book_title}의 요약본 - 작성자 {result.summary_author}
      </SummarySubtitle>
      <Summary>{result.summary}</Summary>
    </RequestContainer>
  );
};

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PageTitle = styled.h3`
  width: 100%;
  display: flex;
  margin-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const CardRowLine = styled.div`
  width: 400px;
  height: 2px;
  display: flex;
  flex-direction: column;
  background-color: black;
`;
const CardRow = styled.div`
  width: 349px;
  height: 214px;
  display: flex;
  margin: 2rem 0;
  background-color: #ddb793;
`;

const SummaryImage = styled.img`
  width: 133px;
  height: 185px;
  margin: 0 1rem;
`;

const Book_Title = styled.h1`
  width: 100%;
  font-size: 22px;
`;

const Likes_image = styled.img`
  width: 40px;
`;

const Summary_Author = styled.p`
  width: 100%;
  font-size: 14px;
`;

const Date = styled.p`
  width: 100%;
  font-size: 13px;
`;
const Likes = styled.p`
  width: 100%;
  font-size: 17px;
`;

const SummarySubtitle = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Summary = styled.p`
  padding: 2rem;
`;

export default DetailBook;
