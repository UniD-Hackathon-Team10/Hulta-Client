import { colors } from "@constants/colors";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@store/configureStore";

type Props = {};

const Request = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<{ title: string; user: string; date: string }[]>([]);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem(
      "request",
      JSON.stringify([
        ...data,
        {
          title: inputRef.current!.value,
          user: userInfo?.nickname,
          date: new Date().toISOString(),
        },
      ])
    );
    inputRef.current!.value = "";
    getData();
  };

  const getData = useCallback(async () => {
    const data = localStorage.getItem("request");
    console.log(data);
    if (!data) {
      setData([]);
      return;
    }
    setData(JSON.parse(data).reverse());
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <RequestContainer>
        <RequestForm onSubmit={handleSubmit}>
          <RequestTextArea ref={inputRef} placeholder="원하는 요약본이 있으면 적어주세요!" />
        </RequestForm>
        <Cards>
          {data.map((result, index) => (
            <CardRow key={index}>
              <BookTitle>{result.title}</BookTitle>
              <Description>
                <User>{result.user}</User>
                <_Date>{new Date(result.date).toLocaleDateString()}</_Date>
              </Description>
            </CardRow>
          ))}
        </Cards>
      </RequestContainer>
    </motion.div>
  );
};

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
`;

const RequestForm = styled.form`
  display: inline-flex;
  top: 4rem;
  position: fixed;
`;

const RequestTextArea = styled.input`
  width: 400px;
  height: 100px;
  border-radius: 25px;
  border: 3px solid ${colors.primary};
  text-align: center;
  :focus {
    outline: none;
  }
`;

const Cards = styled.div`
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const CardRow = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #cc9767;
  padding: 0 2rem;
  word-break: keep-all;
`;

const BookTitle = styled.h1`
  font-size: 17px;
`;

const Description = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const User = styled.p`
  font-size: 14px;
`;

const _Date = styled.p`
  font-size: 13px;
`;
export default Request;
