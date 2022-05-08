import * as S from "./styles"
import showcase from "../../assets/svg/showcase.svg"
import showcaseIcon from "../../assets/svg/showcaseIcon.svg"
import Image from "next/image"
import Button from "../Button"

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
                <h3>Muito mais do que uma interface bonita:
                    A <span>funcionabilidade</span> é o nosso foco principal!
                </h3>
                <p>Projetamos a experiência do usuário, conduzindo-o aos caminhos certos, de acordo com os objetivos da sua empresa.</p>
                <Button background="white" color="black" padding="10px" onClickFunction={() => console.log("foi")} border="1px solid red">Teste</Button>
            </S.ShowcaseText>
        </S.Wrapper>
    )
}
export default Showcase