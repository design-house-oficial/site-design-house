import * as S from "./styles";
import Button from "../Button";
import ArrowButton from "../ArrowButton";
import Link from "next/link";

const StartProject = () => {
  return (
    <S.Wrapper>
      <S.Background></S.Background>
      <S.DescriptionContainer>
        <h2>
          <span>Juntos</span> vamos colocar sua ideia em prática!
        </h2>
        <Link href="https://landing.designhouse.dev/basis">
          <a target="_blank">
            <Button
              background="#0769FC47"
              padding="10px 7px 10px 7px"
              gap="15px"
              color="white"
            >
              Começar meu projeto
              <ArrowButton width="30px" height="30px" border="2px solid white" />
            </Button>
          </a>
        </Link>
        <p>Conte-nos sua ideia e, juntos, vamos buscar a melhor maneira de colocá-la em prática. =&#41;</p>
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};
export default StartProject;
