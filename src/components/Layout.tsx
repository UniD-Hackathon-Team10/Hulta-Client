import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import NavBar from "./GNB";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      {children}
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 450px;
  margin: auto;
  background-color: #fbfbfb;
`;

export default Layout;
