import Card from "@components/Card";
import CategorySelector from "@components/CategorySelector";
import { BOOK_CATEGORY } from "@constants/AppConstant";
import styled from "@emotion/styled";
import { useState } from "react";

interface HomeProps {}

const Temp = Array(50)
  .fill(0)
  .map(() => ({
    image: "https://picsum.photos/200/300",
    title: "테스트입니다",
    author: "복돌복돌",
  }));

const Home = ({}: HomeProps) => {
  const [category, setCategory] = useState<{ label: string; value: any }>(
    BOOK_CATEGORY[0]
  );

  return (
    <Container>
      <CategorySelector
        value={category}
        setValue={setCategory}
        options={BOOK_CATEGORY}
      />
      <DataContainer>
        {Temp.map((result) => (
          <Card
            image={result.image}
            title={result.title}
            author={result.author}
          />
        ))}
      </DataContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  /* padding-bottom: 7rem; */
`;
