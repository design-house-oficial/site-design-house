import * as S from "./styles";
import IntroDescription from "../IntroDescription";
import introTitle from "../../assets/svg/introTitle.svg";
import Button from "../../components/Button";
import ArrowButton from "../../components/ArrowButton";
import { useEffect, useState } from "react";

const HomeInfo = () => {
  const [windowInfo, setWindowInfo] = useState(typeof window !== "undefined" ? {
    height: window.innerHeight,
    scrollY: window.screenY
  }: undefined)

  function scrollDown () {
    if (windowInfo) {
      window.scrollTo({
        top: window.scrollY + windowInfo.height,
        left: 0,
        behavior: "smooth"
      })

      setWindowInfo(typeof window !== "undefined" ? {
        height: window.innerHeight,
        scrollY: window.screenY
      }: undefined)
      
    }
  }

  return (
    <S.Wrapper>
      <S.BackgroundContainer />

      <S.DescriptionContainer>
        <S.IntroTitleContainer introTitle={introTitle.src}>
          <div></div>
        </S.IntroTitleContainer>

        <IntroDescription />

        <S.ServicesContainer>
          <div className="services">
            <a href="https://designhouseoficial.myportfolio.com/" target="_blank" rel="noreferrer"><span className="portfolioText">PORTIFÓLIO</span></a>
            <div></div>
            <span className="servicesText">SERVIÇOS</span>
            <div></div>
            <span className="pricesText">ORÇAMENTO</span>
          </div>
          <Button onClick={() => scrollDown()} padding="10px 0px 10px 15px" color="#494949" background="rgba(64, 64, 64, 0.2)" gap="40px" width="200px">
            <span>Deslize para mais</span>
            <ArrowButton direction="down" width="25px" height="25px" color="#323232" border="2px solid #323232" />
          </Button>
        </S.ServicesContainer>
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};
export default HomeInfo;
