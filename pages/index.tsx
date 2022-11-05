import { NextPageWithLayout } from "./_app";
import Layout from "@components/Layout";

interface HomeProps {}

const Home: NextPageWithLayout<HomeProps> = ({}: HomeProps) => {
  return <div>Index</div>;
};

export default Home;

// Home.getLayout = (page) => <Layout>{page}</Layout>;
