import styled from "styled-components";
import background from "../../assets/svg/background.svg";
import backgroundDesktop from "../../assets/svg/background-desktop.svg";

export const Wrapper = styled.div`
  width: 100vw;
  margin-bottom: 40px;
  position: relative;

  @media (min-width: 1024px) {
    height: 100vh;
    margin: 90px 0px 0px 0px;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 377px;
  background-image: url(${background.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    background-size: 1041px;
    height: 552px;
    background-position: right;
    background-image: url(${backgroundDesktop.src});
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 40px 0px 40px 0px;

  @media (max-width: 767px) {
    align-items: center;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 10%;
    left: 70px;
    gap: 15px;
  }

  @media (min-width: 1240px) {
    position: absolute;
    top: 20%;
    left: 18%;
  }
`;

export const IntroTitleContainer = styled.div`
  >div {
    width: 278.35px;
    height: 50px;
    background-image: url(${props => props.introTitle});
    background-size: contain;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      width: 166.62px;
    }
  }
`;

export const ServicesContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  button {
      display: none;
  }

  .services {
    display: flex;
    align-items: center;
    gap: 10px;

    >div {
      width: 1px;
      height: 10px;
      background-color: white;
    }

  }
  
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: unset;
    height: 200px;
    gap: 60px;

    button {
      display: flex;
      transition: all 0.5s;

      :hover {
        transform: scale(1.08);
        background-color: rgba(64,64,64,0.3);
      }
    }

    .services {
      gap: 40px;
    }
  }

  .portfolioText {
    background: -webkit-linear-gradient(#73c8ff, #0096f6, #0096f6);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .servicesText {
    background: -webkit-linear-gradient(#deff75, #8ebb00);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pricesText {
    background: -webkit-linear-gradient(#ff97b9, #ff6698);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
