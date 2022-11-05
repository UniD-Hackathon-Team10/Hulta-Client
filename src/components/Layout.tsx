import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import NavBar from "./GNB";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  /* position: relative; */
  height: 100%;
  width: 100vw;
  max-width: 450px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  background-color: #fbfbfb;
`;

export default Layout;
