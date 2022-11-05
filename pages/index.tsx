import Card from "@components/Card";
import styled from "@emotion/styled";
import { colors } from "src/constants/colors";

interface HomeProps {}

const Temp = Array(50).map((_, i) => ({
  image: "https://picsum.photos/200/300",
  title: "테스트입니다",
  author: "복돌복돌",
  id: i,
}));

const Home = ({}: HomeProps) => {
  return (
    <Container>
      <DataContainer>
        {Temp.map((result) => (
          <Card
            image={result.image}
            title={result.title}
            author={result.author}
            id={result.id}
          />
        ))}
      </DataContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const DataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;
