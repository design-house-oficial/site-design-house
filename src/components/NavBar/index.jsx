import * as S from "./styles"

import menuHamb from "../../assets/svg/menu-icon.svg"

const NavBar = () => {
    return (
        <S.Wrapper>
            <S.LogoContainer>
                <div></div>
            </S.LogoContainer>
            <S.HambContainer menuHamb={menuHamb.src}>
                <div></div>
            </S.HambContainer>
        </S.Wrapper>
    )
}
export default NavBar