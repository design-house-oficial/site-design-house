import * as S from "./styles";
import showcase from "../../assets/svg/showcase.svg";
import showcaseIcon from "../../assets/svg/showcaseIcon.svg";
import Button from "../Button";
import ArrowButton from "../ArrowButton";
import Image from "next/image";

const Showcase = () => {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.ShowcaseContainer>
          <Image src={showcase} alt="image showcase" />
        </S.ShowcaseContainer>
        <S.ShowcaseIconContainer>
          <Image src={showcaseIcon} alt="showcase icon" />
        </S.ShowcaseIconContainer>
      </S.ImageContainer>
      <S.ShowcaseText>
        <h3>
          Muito mais do que uma interface bonita: A{" "}
          <span>funcionabilidade</span> é o nosso foco principal!
        </h3>
        <p>
          Projetamos a experiência do usuário, conduzindo-o aos caminhos certos,
          de acordo com os objetivos da sua empresa.
        </p>
        <Button className="btnShowcase" color="#494949" gap="30px" background="#40404033" padding="10px 15px 10px 15px">
          Ver case completo
          <ArrowButton
            width="25px"
            height="25px"
            border="2px solid #323232"
          />
        </Button>
      </S.ShowcaseText>
    </S.Wrapper>
  );
};
export default Showcase;