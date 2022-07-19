import * as S from "./styles";
import instagramIcon from "../../assets/svg/instagramIcon.svg";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterMobile>
        <h1>Design House</h1>
        <h2>CONTATE-NOS</h2>
        <span>bianka@designhouse.dev</span>
        <span>+55 43 988 284 179</span>
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
          <span>Copyright &copy; 2022. Design House. Direitos reservados</span>
        </div>
      </S.FooterMobile>

      <S.FooterDesktop instagramIcon={instagramIcon.src}>
        <div className="contactContainer">
          <h1>Design House</h1>
          <p>Nós sabemos o valor de uma ideia!</p>
          <div>
            <h2>Contato:</h2>
            <span>+55 43 988 284 179</span>
            <span>bianka@designhouse.dev</span>
          </div>
          <span>Copyright &copy; 2022. Design House. Direitos reservados</span>
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

        {/* <div className="infoContainer">
                  <h2>Sobre</h2>
                  <div>
                      <span>Quem somos</span>
                      <span>Contrate-nos</span>
                  </div>
              </div> */}

        <div className="socialContainer">
          <h2>Redes sociais</h2>
          <div>
            <div>
              <a href="http://facebook.com/designhousemga" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f"></i> Facebook
              </a>
            </div>
            <div>
              <a href="http://linkedin.com/company/designhouseoficial" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i> Linkedin
              </a>
            </div>
            <div>
              <a href="http://instagram.com/designhouseoficial/" target="_blank" rel="noreferrer">
                <span></span> Instagram
              </a>
            </div>
          </div>
        </div>
      </S.FooterDesktop>
    </S.Wrapper>
  );
};
export default Footer;
