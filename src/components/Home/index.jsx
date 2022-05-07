import NavBar from "../NavBar"
import HomeInfo from "../HomeInfo"
import DescriptionBody from "../DescriptionBody"
import * as S from "./styles"

export const Home = () => {
    return (
        <S.Wrapper>
            <NavBar/>
            <HomeInfo/>
            <DescriptionBody/>
        </S.Wrapper>
    )
}