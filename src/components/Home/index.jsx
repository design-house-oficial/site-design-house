import NavBar from "../NavBar";
import HomeInfo from "../HomeInfo";
import DescriptionBody from "../DescriptionBody";
import Showcase from "../Showcase";
import * as S from "./styles";
import Script from "next/script";
import Link from "next/link";

export const Home = () => {
  return (
    <S.Wrapper>
      <Script
        src="https://kit.fontawesome.com/afb4a8eb1c.js"
        crossorigin="anonymous"
      ></Script>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;0,700;1,300&display=swap"
        rel="stylesheet"
      ></link>
      <NavBar />
      <HomeInfo />
      <DescriptionBody />
      <Showcase />
    </S.Wrapper>
  );
};
