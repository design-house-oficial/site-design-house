import NavBar from "../NavBar";
import HomeInfo from "../HomeInfo";
import DescriptionBody from "../DescriptionBody";
import Showcase from "../Showcase";
import ShowcaseSlide from "../ShowcaseSlide";
import StartProject from "../StartProject";
import StartProjectDown from "../StartProjectDown";
import Footer from "../Footer";
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
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
        rel="stylesheet"
      ></link>
      <NavBar />
      <HomeInfo />
      <DescriptionBody />
      <Showcase />
      <ShowcaseSlide/>
      <StartProject/>
      <StartProjectDown/>
      <Footer/>
    </S.Wrapper>
  );
};
