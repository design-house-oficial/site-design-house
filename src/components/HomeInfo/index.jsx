import * as S from "./styles";
;
import IntroDescription from "../IntroDescription";
import introTitle from "../../assets/svg/introTitle.svg";

const HomeInfo = () => {
  return (
    <S.Wrapper>
      <S.BackgroundContainer />

      <S.DescriptionContainer>
        <S.IntroTitleContainer introTitle={introTitle.src}>
          <div></div>
        </S.IntroTitleContainer>

        <IntroDescription />

        <S.ServicesContainer>
          <span className="portfolioText">PORTIFÓLIO</span>
          <div></div>
          <span className="servicesText">SERVIÇOS</span>
          <div></div>
          <span className="pricesText">ORÇAMENTO</span>
        </S.ServicesContainer>
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};
export default HomeInfo;
