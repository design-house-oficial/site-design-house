import  * as S from "./styles"
import Image from "next/image"

const DescriptionBody = () => {
    return (
        <S.Wrapper>
            <S.GoalContainer>
                <S.Goal>
                    <h3>PEGA A VISÃO</h3>
                    <p>Temos como visão, tornar um mundo tecnológico mais acessível e inclusivo através de soluções funcionais pensadas pelo design.</p>
                    <S.GoalArrow/>
                </S.Goal>
            </S.GoalContainer>
            <h2><span>Design</span> <span>&#38;</span> <span>soluções!</span></h2>
            <S.IntroduceContainer>
                <S.Introduce>
                    <div>
                        <S.IntroUpArrowContainer/>
                        <h3>QUEM SOMOS?</h3>
                        <p>Somos um estúdio de criar plataformas bonitas e intuitivas, focando na experiência do usuário.</p>
                        <p>Desenvolvemos seu projeto á partir do design estratégico, cuidando de cada detalhe.</p>
                        <S.IntroDownArrowContainer><div></div></S.IntroDownArrowContainer>
                    </div>
                </S.Introduce>

                <S.Services>
                    <div>
                        <S.ServicesArrowContainer/>
                        <h3>COMO PODEMOS TE AJUDAR?</h3>
                        <p>Para entregar uma boa experiência ao seu usuário, é necessário muito mais do que uma interface bonita. Seguimos os padrões de design recomendados pela Google, Apple e Microsoft, garantindo boa usabilidade e adequação a todas as plataformas.</p>
                    </div>
                </S.Services>
            </S.IntroduceContainer>
        </S.Wrapper>
    )
}
export default DescriptionBody