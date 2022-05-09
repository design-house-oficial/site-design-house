import * as S from "./styles";
import Image from "next/image";

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
          <span>Copyright &copy; 2020. Fteam. Direitos reservados</span>
        </div>
      </S.FooterMobile>
    </S.Wrapper>
  );
};
export default Footer;
