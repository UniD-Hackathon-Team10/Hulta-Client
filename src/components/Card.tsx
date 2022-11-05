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
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <Container
        onClick={() => {
          router.push(`/books/${id}`);
        }}
      >
        <Image src={image} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Container>
    </motion.div>
  );
};

const Container = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const Image = styled.img`
  border-radius: 2px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;

const Author = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #000000;
`;

export default Card;
