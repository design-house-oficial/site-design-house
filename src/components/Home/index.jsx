import NavBar from "../NavBar"
import HomeInfo from "../HomeInfo"
import DescriptionBody from "../DescriptionBody"
import Showcase from "../Showcase"
import * as S from "./styles"

export const Home = () => {
    return (
        <S.Wrapper>
            <NavBar/>
            <HomeInfo/>
            <DescriptionBody/>
            <Showcase/>
        </S.Wrapper>
    )
}