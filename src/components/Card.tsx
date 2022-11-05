import { colors } from "@constants/colors";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  image: string;
  title: string;
  author: string;
  id: number;
};

const Card = ({ image, title, author, id = 1 }: Props) => {
  const router = useRouter();
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
      <Container
        onClick={() => {
          router.push(`/books/${id}`);
        }}
      >
        <Image src={image} />
        <Title>{title.length >= 10 ? title.slice(0, 9) + "..." : title}</Title>
        <Author>{author}</Author>
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  width: 185px;
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
  height: 192px;
  object-fit: contain;
  border-radius: 0.5rem;
  background-color: ${colors.white};
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
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
  text-align: right;
  text-transform: capitalize;
`;

export default Card;
