import styled from "@emotion/styled";
import { colors } from "src/constants/colors";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Container>
      <Logo>HULTA</Logo>
    </Container>
  );
};

const Container = styled.div``;

const Logo = styled.h1`
  color: ${colors.primary};
  margin: 0;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export default Home;

// Home.getLayout = (page) => <Layout>{page}</Layout>;
