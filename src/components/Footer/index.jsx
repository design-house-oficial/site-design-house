import * as S from "./styles";
import Image from "next/image";
import instagramIcon from "../../assets/svg/instagramIcon.svg"

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterMobile>
        <h1>fteam</h1>
        <h2>CONTATE-NOS</h2>
        <span>loremipsum@gmail.com</span>
        <span>+55 00 99999-9999</span>
        <div className="iconContainer">
          <div className="facebookIcon">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="linkedinIcon">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="instagramIcon">
            <i className="fa-brands fa-instagram-square"></i>
          </div>
        </div>
        <div className="politicContainer">
          <div>
            <span>Termos e Condições</span>
            <span>Política de Privacidade</span>
          </div>
          <span>Copyright &copy; 2022. Fteam. Direitos reservados</span>
        </div>
      </S.FooterMobile>

      <S.FooterDesktop>
              <div className="contactContainer">
                  <h1>fteam</h1>
                  <p>Nós sabemos o valor de uma ideia!</p>
                  <div>
                      <h2>Contato:</h2>
                      <span>+55 43 988 284 179</span>
                      <span>contato@fteam.dev</span>
                  </div>
                  <span>Copyright &copy; 2022. Fteam. Direitos reservados</span>
              </div>

              <div className="servicesContainer">
                  <h2>Serviços</h2>
                  <div>
                      <span>Pesquisas e testes</span>
                      <span>Estudo de persona</span>
                      <span>Sites maps</span>
                      <span>UX/UI design</span>
                      <span>Copywriting</span>
                      <span>Consultoria</span>
                  </div>
              </div>

              <div className="infoContainer">
                  <h2>Sobre</h2>
                  <div>
                      <span>Quem somos</span>
                      <span>Contrate-nos</span>
                  </div>
              </div>

              <div className="socialContainer">
                  <h2>Redes sociais</h2>
                  <div>
                    <div><i className="fa-brands fa-facebook-f"></i> Facebook</div>
                    <div><i className="fa-brands fa-linkedin-in"></i> Linkedin</div>
                    <div><Image src={instagramIcon} alt="instagram icon"/> Instagram</div>
                  </div>
              </div>
      </S.FooterDesktop>
    </S.Wrapper>
  );
};
export default Footer;
