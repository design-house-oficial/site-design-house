;
import * as S from "./styles";
import buttonBackground from "../../assets/svg/startBackground.svg";
import iconInterface from "../../assets/svg/iconInterface.svg";
import iconCopyright from "../../assets/svg/iconCopyright.svg";
import iconMaps from "../../assets/svg/iconMaps.svg";
import iconQuery from "../../assets/svg/iconQuery.svg";
import iconSearch from "../../assets/svg/iconSearch.svg";
import Button from "../Button";
import ArrowButton from "../ArrowButton";
import Link from "next/link";

const StartProjectDown = () => {
  return (
    <S.Wrapper>
      <S.ButtonTop buttonBackground={buttonBackground.src}>
        <Link href="https://www.google.com/">
          <a target="_blank">
            <div onClick={() => {}}></div>
          </a>
        </Link>
      </S.ButtonTop>
      <S.TitleContainer>
        <p>Design</p>
        <div>
          <span>e</span>
          <span>s</span>
          <span>t</span>
          <span>r</span>
          <span>a</span>
          <span>t</span>
          <span>é</span>
          <span>g</span>
          <span>i</span>
          <span>c</span>
          <span>o</span>
        </div>
      </S.TitleContainer>
      <S.DescriptionContainer>
        <S.DescriptionText>
            <p>
              Realizamos pesquisas que envolvem passos como briefing, escopo da
              ideia, jornada do usuário, design thinking, planejamento, sites maps,
              copywriting, UX writing e design de interface do seu projeto. Ou seja,
              deixe com a gente toda a parte de UX e UI!
            </p>
            <p>
              Com toda essa experiência, estamos prontos para te atender tanto na
              criação de interfaces intuitivas, quanto na consultoria de um projeto
              pronto ou em andamento.
            </p>
        </S.DescriptionText>
        <div className="border"></div>
        <S.ServicesContainer iconInterface={iconInterface.src} iconCopyright={iconCopyright.src} iconMaps={iconMaps.src} iconQuery={iconQuery.src} iconSearch={iconSearch.src}>
          <div>
              <div className="interface"></div>
              User interface
          </div>
          <div>
              <div className="copyright"></div>
              Sites maps
          </div>
          <div>
              <div className="maps"></div>
              Consultorias
          </div>
          <div>
              <div className="query"></div>
              Pesquisas e testes
          </div>
          <div>
              <div className="search"></div>
              Copywriting
          </div>
        </S.ServicesContainer>
      </S.DescriptionContainer>
        <Link href="https://www.google.com/">
          <a target="_blank">
            <Button gap="10px" background="#0769FC47" padding="12px 7px 12px 7px">
              Começar meu projeto{" "}
              <ArrowButton width="25px" height="25px" border="2px solid white" />
            </Button>
          </a>
        </Link>
    </S.Wrapper>
  );
};
export default StartProjectDown;
