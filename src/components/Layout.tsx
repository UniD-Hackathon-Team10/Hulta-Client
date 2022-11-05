import styled from "@emotion/styled";
import { useAppSelector } from "@store/configureStore";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import NavBar from "./GNB";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/auth/login");
    }
  });

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
  max-width: 450px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  background-color: #fbfbfb;
`;

export default Layout;
