import styled from "styled-components";
import background from "./background.svg";
import backgroundDesktop from "./background-desktop.svg";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 377px;
  background-image: url(${background.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    background-size: 1041px;
    height: 552px;
    background-position: right;
    background-image: url(${backgroundDesktop.src});
    z-index: -1;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 40px 0px 40px 0px;

  @media (min-width: 768px) {
    position: absolute;
    top: 10%;
    left: 70px;
    gap: 15px;
  }
`;

export const IntroTitleContainer = styled.div`
  img {
    width: 278.35px !important;

    @media (min-width: 768px) {
      width: 166.62px !important;
    }
  }
`;

export const ServicesContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

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
