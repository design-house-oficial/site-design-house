import * as S from "./styles";
import Link from "next/link";
import Button from "../../components/Button";
import ArrowButton from "../../components/ArrowButton";
import { useEffect, useState } from "react";

const DescriptionBody = () => {
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
      <div className="background"></div>
      <div className="teste">
        <S.GoalContainer className="goal">
          <S.Goal>
            <h3>PEGA A VISÃO</h3>
            <p>
              Temos como visão, tornar um mundo tecnológico mais acessível e inclusivo através de soluções funcionais
              pensadas pelo design.
            </p>
            <S.GoalArrow />
          </S.Goal>
        </S.GoalContainer>
        <div className="text-center">
          <Link href="https://www.google.com/">
            <a target="_blank">
              <div className="design"></div>
            </a>
          </Link>
          <Link href="https://www.google.com/">
            <a target="_blank">
              <div className="and"></div>
            </a>
          </Link>
          <Link href="https://www.google.com/">
            <a target="_blank">
              <div className="solution"></div>
            </a>
          </Link>
        </div>
        <S.IntroduceContainer className="introduce">
          <S.Introduce>
            <div>
              <S.IntroUpArrowContainer />
              <h3>QUEM SOMOS?</h3>
              <p>Somos um estúdio de criar plataformas bonitas e intuitivas, focando na experiência do usuário.</p>
              <p>Desenvolvemos seu projeto á partir do design estratégico, cuidando de cada detalhe.</p>
              <S.IntroDownArrowContainer>
                <div></div>
              </S.IntroDownArrowContainer>
            </div>
          </S.Introduce>
          <S.Services className="services">
            <div>
              <S.ServicesArrowContainer />
              <div className="text">
                <h3>COMO PODEMOS TE AJUDAR?</h3>
                <p>
                  Para entregar uma boa experiência ao seu usuário, é necessário muito mais do que uma interface bonita.
                  Seguimos os padrões de design recomendados pela Google, Apple e Microsoft, garantindo boa usabilidade
                  e adequação a todas as plataformas.
                </p>
              </div>
            </div>
          </S.Services>
        </S.IntroduceContainer>
      </div>
      <Button onClick={() => scrollDown()} padding="10px 0px 10px 15px" color="#494949" background="rgba(64, 64, 64, 0.2)" gap="40px" width="200px">
        <span>Deslize para mais</span>
        <ArrowButton direction="down" width="25px" height="25px" color="#323232" border="2px solid #323232" />
      </Button>
    </S.Wrapper>
  );
};
export default DescriptionBody;
