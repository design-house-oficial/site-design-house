import * as S from "./styles";
import CardSlide from "../CardSlide";
import a from "./retangle.svg";
import b from "./thumbnail.svg";
import Button from "../Button";
import ArrowButton from "../ArrowButton";
import Link from "next/link";

const ShowcaseSlide = () => {
  return (
    <S.Wrapper>
      <S.UlContainer>
        <CardSlide
          image={b}
          title="Folha de Pernambuco: App de leitura de jornal"
          logo={a}
        />
        <CardSlide
          image={b}
          title="Folha de Pernambuco: App de leitura de jornal"
          logo={a}
        />
        <CardSlide
          image={b}
          title="Folha de Pernambuco: App de leitura de jornal"
          logo={a}
        />
        <CardSlide
          image={b}
          title="Folha de Pernambuco: App de leitura de jornal"
          logo={a}
        />
      </S.UlContainer>
      <S.SeeMoreContainer>
        <h2>Descubra nossos cases e se inspire</h2>
        <Link href="https://www.google.com/">
          <a target="_blank">
            <Button
              background="#60606033"
              padding="7px 20px 7px 150px"
              gap="80px"
            >
              Ver todos os cases
              <ArrowButton
                border="2px solid white"
                width="25px"
                height="25px"
              />
            </Button>
          </a>
        </Link>
      </S.SeeMoreContainer>
    </S.Wrapper>
  );
};
export default ShowcaseSlide;
