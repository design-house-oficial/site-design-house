import * as S from "./styles"
import Image from "next/image"
import menuHamb from "../../assets/svg/menu-icon.svg"

const NavBar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <Image src="/logo.png" width="120px" height="45px"/>
            </S.LogoContainer>
            <S.HambContainer>
                <Image src={menuHamb} alt="menuHamb"/>
            </S.HambContainer>
        </S.Wrapper>
    )
}
export default NavBar