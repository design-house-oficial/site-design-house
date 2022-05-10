import * as S from "./styles"
import Image from "next/image"
import menuHamb from "../../assets/svg/menu-icon.svg"

const NavBar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <h1>
                    <span className="ft">ft</span>
                    <span>e</span>
                    <span>a</span>
                    <span>m</span>
                </h1>
            </S.LogoContainer>
            <S.HambContainer>
                <Image src={menuHamb} alt="menuHamb"/>
            </S.HambContainer>
        </S.Wrapper>
    )
}
export default NavBar