import Card from "@components/Card";
import CategorySelector from "@components/CategorySelector";
import { BOOK_CATEGORY } from "@constants/AppConstant";
import styled from "@emotion/styled";
import axiosInstance from "@utils/axios";
import { useEffect, useState } from "react";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [category, setCategory] = useState<{ label: string; value: any }>(BOOK_CATEGORY[0]);

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const query = category.value ? `/category/${category.value}` : "";
      const {
        data: {
          body: { posts },
        },
      } = await axiosInstance.get(`/api/v1/article${query}`);
      console.log(posts);
      setData(posts.reverse());
    })();
  }, [category]);

  return (
    <Container>
      <CategorySelector value={category} setValue={setCategory} options={BOOK_CATEGORY} />
      <DataContainer>
        {data.map((result) => (
          <Card image={result.bookThumbnail} title={result.bookTitle} author={result.nickname} id={result.articleNo} />
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
