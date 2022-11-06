import React, { useCallback, useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styled from "@emotion/styled";
import TextInput from "@components/atoms/TextInput";
import { colors } from "@constants/colors";
import { keyframes } from "@emotion/react";
import axiosInstance from "@utils/axios";
import { useRouter } from "next/router";
import { useAppSelector } from "@store/configureStore";
type Props = {};

const Create = (props: Props) => {
  const router = useRouter();

  const userInfo = useAppSelector((state) => state.user.userInfo);

  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [result, setResult] = useState<any[]>([]);
  const [value, setValue] = useState<{
    id: number;
    bookTitle: string;
    author: string;
    category: string;
    bookThumbnail: string;
  } | null>(null);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onClickOption = useCallback(
    (value: any) => () => {
      setValue(value);
      setOpen(false);
    },
    []
  );

  const onSubmit = useCallback(async () => {
    if (!userInfo || !value || !textAreaRef.current!.value) return;
    console.log(value, textAreaRef.current!.value);

    await axiosInstance.post("/api/v1/write", {
      nickname: userInfo.nickname,
      category: value.category,
      author: value.author,
      bookTitle: value.bookTitle,
      bookThumbnail: value.bookThumbnail,
      content: textAreaRef.current!.value,
      userId: userInfo.id || 1,
    });
    router.push("/");
  }, [value, userInfo]);

  useEffect(() => {
    if (!search) {
      setResult([]);
      return;
    }
    (async () => {
      const {
        data: {
          body: { book },
        },
      } = await axiosInstance.get(`/api/v1/book/${search}`);
      const books = [];
      if (book) books.push(book);
      console.log(books);
      setResult(books);
    })();
  }, [search]);

  return (
    <CreateContainer>
      <TextInput
        wrapperStyle={{ width: "calc(100% - 40px)", margin: "0 20px" }}
        endAdornment={<MagnifyingGlassIcon width={30} height={30} color={colors.primary} />}
        placeholder="책을 검색하세요"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            return;
          }
          setOpen(false);
        }}
      />
      {open && result.length > 0 && (
        <OptionContainer>
          {result.map((res, index) => (
            <Option onClick={onClickOption(res)} key={index}>
              {res.bookTitle}
            </Option>
          ))}
        </OptionContainer>
      )}

      {value && (
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}>
          <Container>
            <Image src={value.bookThumbnail} />
            <Title>{value.bookTitle.length >= 10 ? value.bookTitle.slice(0, 9) + "..." : value.bookTitle}</Title>
            <Author>{value.author}</Author>
          </Container>
        </div>
      )}
      <SummaryTextArea placeholder="책을 요약해주세요" ref={textAreaRef} />
      <Footer>
        <SubmitButton onClick={onSubmit}>제출하기</SubmitButton>
      </Footer>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  position: relative;
  height: 80vh;
`;

const OptionContainer = styled.ul`
  list-style-type: none;
  background-color: ${colors.white};
  position: absolute;
  border: 1px solid black;
  border-radius: 4px;
  top: 60px;
  padding: 10px 20px;
  width: 90%;
  left: 5%;
  max-height: 200px;
  overflow-y: scroll;
`;

const growDown = keyframes`
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
`;

const Option = styled.li`
  font-size: 15px;
  color: ${colors.text_primary};
  padding: 10px 0;
  animation: ${growDown} 300ms ease-in-out;
`;

const SummaryTextArea = styled.textarea`
  margin: 10px 20px 0;
  width: calc(100% - 40px);
  height: 300px;
  border: 2px solid ${colors.primary};
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${colors.primary};
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 20px;
`;

const Container = styled.div`
  width: 140px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ddb793;
  border-radius: 1rem;
`;

const Image = styled.img`
  width: 100px;
  height: 120px;
  object-fit: contain;
  border-radius: 0.5rem;
  background-color: ${colors.white};
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding-top: 1rem;
`;

const Author = styled.p`
  width: 70%;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #000000;
  padding-top: 5px;
  text-align: center;
  text-transform: capitalize;
`;

export default Create;
