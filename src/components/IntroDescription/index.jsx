import * as S from "./styles";
import Image from "next/image";
import ideaImage from "../../assets/svg/idea.svg"

const IntroDescription = () => {
  return (
    <S.Wrapper>
      <p>Nós sabemos o valor de uma</p>
      <S.IdeaImageContainer>
        <Image src={ideaImage} alt="idea image"/>
      </S.IdeaImageContainer>
    </S.Wrapper>
  );
};
export default IntroDescription;
