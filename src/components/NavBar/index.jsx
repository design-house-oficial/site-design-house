import * as S from "./styles"
import Image from "next/image"
import ft from "../../assets/svg/darkLetterLogo/ft-dark.svg"
import e from "../../assets/svg/darkLetterLogo/e-dark.svg"
import a from "../../assets/svg/darkLetterLogo/a-dark.svg"
import m from "../../assets/svg/darkLetterLogo/m-dark.svg"
import menuHamb from "../../assets/svg/menu-icon.svg"

const NavBar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <Image className="ft" src={ft} alt="ft letter"/>
                <Image className="e" src={e} alt="e letter"/>
                <Image className="a" src={a} alt="a letter"/>
                <Image className="m" src={m} alt="m letter"/>
            </S.LogoContainer>
            <S.HambContainer>
                <Image src={menuHamb} alt="menuHamb"/>
            </S.HambContainer>
        </S.Wrapper>
    )
}
export default NavBar