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
  const [category, setCategory] = useState<{ label: string; value: any }>(BOOK_CATEGORY[0]);

  return (
    <Container>
      <CategorySelector value={category} setValue={setCategory} options={BOOK_CATEGORY} />
      <DataContainer>
        {Temp.map((result) => (
          <Card image={result.image} title={result.title} author={result.author} />
        ))}
      </DataContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
`;

const DataContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;
