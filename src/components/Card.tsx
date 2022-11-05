import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  image: string;
  title: string;
  author: string;
};

const Card = ({ image, title, author }: Props) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
      viewport={{ once: true }}
    >
      <Container>
        <Image src={image} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  width: 175px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ddb793;
  border-radius: 1rem;
`;

const Image = styled.img`
  width: 130px;
  border-radius: 0.5rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  text-align: center;
  padding-top: 1rem;
`;

const Author = styled.p`
  width: 70%;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  padding-top: 5px;
  text-align: right;
`;

export default Card;
