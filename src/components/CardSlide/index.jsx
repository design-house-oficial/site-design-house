import * as S from "./styles"

const CardSlide = ({ image, logo, title }) => {

return (
    <S.Wrapper>
        <S.ImageContainer background={image}>
            <div></div>
        </S.ImageContainer>
        <S.DescriptionContainer logo={logo}>
            <div></div>
            <h3>{title}</h3>
        </S.DescriptionContainer>
    </S.Wrapper>
)
}
export default CardSlide