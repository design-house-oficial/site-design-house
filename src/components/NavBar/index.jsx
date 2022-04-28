import * as S from "./styles"
import ft from "../../assets/svg/darkLetterLogo/ft.svg"
import e from "../../assets/svg/darkLetterLogo/e.svg"
import a from "../../assets/svg/darkLetterLogo/a.svg"
import m from "../../assets/svg/darkLetterLogo/m.svg"
import menuHamb from "../../assets/svg/menuHamb/menu-icon.svg"
import Image from "next/image"

const NavBar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <Image src={ft} alt="ft letter" />
                <Image src={e} alt="e letter" />
                <Image src={a} alt="a letter" />
                <Image src={m} alt="m letter" />
            </S.LogoContainer>
            <Image src={menuHamb} alt="menu hamb ico" />
        </S.Wrapper>
    )
}
export default NavBar