import Image from "next/image"
import * as S from "./styles"

const CardSlide = ({ image, logo, title }) => {
return (
    <S.Wrapper>
        <S.ImageContainer>
            <Image src={image} alt={title}/>
        </S.ImageContainer>
        <S.DescriptionContainer>
            <Image src={logo} alt={title}/>
            <h3>{title}</h3>
        </S.DescriptionContainer>
    </S.Wrapper>
)
}
export default CardSlide