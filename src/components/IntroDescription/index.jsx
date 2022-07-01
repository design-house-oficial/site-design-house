import * as S from "./styles";
;
import ideaImage from "../../assets/svg/idea.svg"

const IntroDescription = () => {
  return (
    <S.Wrapper>
      <p>Nós sabemos o valor de uma</p>
      <S.IdeaImageContainer ideaImage={ideaImage.src}>
        <div></div>
      </S.IdeaImageContainer>
    </S.Wrapper>
  );
};
export default IntroDescription;
