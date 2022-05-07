import * as S from "./styles";
import Image from "next/image";
import IntroDescription from "../IntroDescription";
import introTitle from "../../assets/svg/introTitle.svg";
import barServices from "../../assets/svg/barServices.svg";

const HomeInfo = () => {
  return (
    <S.Wrapper>
      <S.BackgroundContainer />

      <S.DescriptionContainer>
        <S.IntroTitleContainer>
          <Image className="introTitle" src={introTitle} alt="intro title" />
        </S.IntroTitleContainer>

        <IntroDescription />

        <S.ServicesContainer>
          <span className="portfolioText">PORTIFÓLIO</span>
          <Image src={barServices} alt="bar services" />
          <span className="servicesText">SERVIÇOS</span>
          <Image src={barServices} alt="bar services" />
          <span className="pricesText">ORÇAMENTO</span>
        </S.ServicesContainer>
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};
export default HomeInfo;
