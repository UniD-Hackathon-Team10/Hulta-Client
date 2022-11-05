import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/24/solid";
import styled from "@emotion/styled";
import React, { LegacyRef, useEffect, useMemo, useRef, useState } from "react";
import axiosInstance from "@utils/axios";
import { BOOK_CATEGORY } from "@constants/AppConstant";

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
  const [result, setResults] = useState<any | null>(null);
  const [category, setCategory] = useState("");
  const router = useRouter();

  const postId = useMemo(() => router.query.bookid, [router]);

  useEffect(() => {
    if (!postId) return;
    (async () => {
      const {
        data: {
          body: { posts },
        },
      } = await axiosInstance.get(`/api/v1/article/${postId}`);
      console.log(posts);
      const category = BOOK_CATEGORY.find((data) => data.value === posts.category);
      setCategory(category?.label || "");
      setResults(posts);
    })();
  }, [postId]);

  if (!result)
    return (
      <div style={{ display: "flex", height: "400px", alignItems: "center", justifyContent: "center" }}>
        <p>Loading...</p>
      </div>
    );
  return (
    <RequestContainer>
      <PageTitle>카테고리 : {category}</PageTitle>
      <CardRowLine />
      <CardRow>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SummaryImage src={result.bookThumbnail} />
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
          <Book_Title>{result.bookTitle}</Book_Title>
          <Summary_Author>{result.author}</Summary_Author>
          <_Date>{new Date(result.createdDate).toLocaleString()}</_Date>
          {/* <Likes>{10}</Likes>
          <div style={{ width: "100%" }}>
            <HeartIcon width={30} height={30} />
          </div> */}
        </div>
      </CardRow>
      <CardRowLine />
      <PageTitle>요약</PageTitle>
      <CardRowLine />
      <SummarySubtitle>
        {result.bookTitle}의 요약본 - 작성자 {result.nickname}
      </SummarySubtitle>
      <Summary>{result.content}</Summary>
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
  width: 356px;
  height: 214px;
  display: flex;
  margin: 2rem 0;
  background-color: #ddb793;
  border-radius: 8px;
`;

const SummaryImage = styled.img`
  width: 133px;
  height: 185px;
  margin: 0 1rem;
  border-radius: 4px;
`;

const Book_Title = styled.h1`
  width: 100%;
  font-size: 22px;
  word-break: keep-all;
`;

const Likes_image = styled.img`
  width: 40px;
`;

const Summary_Author = styled.p`
  width: 100%;
  font-size: 14px;
`;

const _Date = styled.p`
  width: 100%;
  font-size: 13px;
`;
const Likes = styled.p`
  width: 100%;
  font-size: 17px;
`;

const SummarySubtitle = styled.div`
  margin-top: 2rem;
  padding: 0 20px;
  font-size: 20px;
`;

const Summary = styled.p`
  padding: 2rem;
  line-height: 1.8;
`;

export default DetailBook;
