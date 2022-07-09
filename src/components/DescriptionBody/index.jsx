import  * as S from "./styles"
import Link from "next/link"


const DescriptionBody = () => {
    return (
        <S.Wrapper>
            <div className="background"></div>
            <S.GoalContainer className="goal">
                <S.Goal>
                    <h3>PEGA A VISÃO</h3>
                    <p>Temos como visão, tornar um mundo tecnológico mais acessível e inclusivo através de soluções funcionais pensadas pelo design.</p>
                    <S.GoalArrow/>
                </S.Goal>
            </S.GoalContainer>
            <div className="text-center">
            <Link href="https://www.google.com/">
                <a target="_blank">
                    <div className="design"></div>
                </a>
            </Link>
            <Link href="https://www.google.com/">
                <a target="_blank">
                    <div className="and"></div>
                </a>
            </Link>
            <Link href="https://www.google.com/">
                <a target="_blank">
                    <div className="solution"></div>      
                </a>
            </Link>
            </div>
            <S.IntroduceContainer className="introduce">
                <S.Introduce>
                    <div>
                        <S.IntroUpArrowContainer/>
                        <h3>QUEM SOMOS?</h3>
                        <p>Somos um estúdio de criar plataformas bonitas e intuitivas, focando na experiência do usuário.</p>
                        <p>Desenvolvemos seu projeto á partir do design estratégico, cuidando de cada detalhe.</p>
                        <S.IntroDownArrowContainer><div></div></S.IntroDownArrowContainer>
                    </div>
                </S.Introduce>

                <S.Services className="services">
                    <div>
                        <S.ServicesArrowContainer/>
                        <div className="text">
                            <h3>COMO PODEMOS TE AJUDAR?</h3>
                            <p>Para entregar uma boa experiência ao seu usuário, é necessário muito mais do que uma interface bonita. Seguimos os padrões de design recomendados pela Google, Apple e Microsoft, garantindo boa usabilidade e adequação a todas as plataformas.</p>
                        </div>
                    </div>
                </S.Services>
            </S.IntroduceContainer>
        </S.Wrapper>
    )
}
export default DescriptionBody