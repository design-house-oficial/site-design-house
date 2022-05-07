import NavBar from "../NavBar"
import HomeInfo from "../HomeInfo"
import * as S from "./styles"

export const Home = () => {
    return (
        <S.Wrapper>
            <NavBar/>
            <HomeInfo/>
        </S.Wrapper>
    )
}