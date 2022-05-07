import styled from "styled-components";
import ArrowGoal from "../../assets/svg/goalArrow-M.svg";
import ArrowGoalDesktop from "../../assets/svg/goalArrow-D.svg";
import IntroUpArrow from "../../assets/svg/introArrow-M.svg";
import IntroUpArrowDesktop from "../../assets/svg/introArrow-D.svg";
import IntroDownArrow from "../../assets/svg/introArrowDown-M.svg";
import IntroDownArrowDesktop from "../../assets/svg/introArrowDown-D.svg";
import ServicesArrow from "../../assets/svg/servicesArrow-M.svg";
import ServicesArrowDesktop from "../../assets/svg/servicesArrow-D.svg";
import BackgroundDescription from "../../assets/svg/DescriptionBackground.svg";
import BackgroundDescriptionDesktop from "../../assets/svg/DescriptionBackground-D.svg";

export const Wrapper = styled.div`
  width: 100% !important;
  color: white;
  align-self: center;
  max-width: 428px;

  @media (min-width: 1024px) {
    max-width: 1150px;
    background: url(${BackgroundDescriptionDesktop.src}) no-repeat top left;
    background-size: 287px;
  }

  p {
    max-width: 197px;
    font-weight: 300;
    font-size: 16px;
    line-height: 23.92px;

    @media (min-width: 1024px) {
      min-width: 388px;
    }
  }

  h2 {
    font-weight: 300;
    text-align: center;
    font-size: 48px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    margin: 75px 0px 115px 0px;

    @media (max-width: 420px) {
      font-size: 40px;
    }
    @media (max-width: 334px) {
      font-size: 30px;
    }
    @media (min-width: 1024px) {
      font-size: 100px;
      margin: 50px 0px 50px 0px;
    }
  }
`;

export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(${BackgroundDescription.src}) no-repeat;

  @media (min-width: 1024px) {
    background: none;
  }
`;

export const Goal = styled.div`
  width: 50%;
  align-self: flex-end;
  position: relative;
`;
export const GoalArrow = styled.div`
  height: 90px;
  width: 24px;
  background: url(${ArrowGoal.src}) no-repeat;
  position: absolute;
  left: 40%;
  bottom: -80px;

  @media (min-width: 1024px) {
    width: 190px;
    height: 145px;
    background: url(${ArrowGoalDesktop.src}) no-repeat;
    top: 35px;
    left: -130px;
  }
`;

export const IntroduceContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;

    p {
      margin: 10px 0px 10px 0px;
    }
  }
`;
export const Introduce = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(${BackgroundDescription.src}) no-repeat bottom right;

  @media (min-width: 1024px) {
    width: 60%;
    background: none;
  }

  > div {
    position: relative;
    width: 50%;
    margin-left: 20px;
  }
`;

export const Services = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(${BackgroundDescription.src}) no-repeat bottom left;
  text-align: center;
  margin-top: 33px;

  h3 {
    max-width: 198px;
    font-size: 20px;
  }

  > div {
    align-self: flex-end;
    position: relative;
    width: 50%;
    margin-right: 20px;
  }
  @media (min-width: 1024px) {
    width: 50%;
    background: none;
    text-align: unset;
    margin: 0;

    h3 {
      max-width: 100%;
    }

    div {
      width: 100%;
    }
  }
`;

export const IntroUpArrowContainer = styled.div`
  height: 105px;
  width: 24px !important;
  background: url(${IntroUpArrow.src}) no-repeat;
  position: absolute !important;
  top: -115px;
  left: 22%;

  @media (min-width: 1024px) {
    width: 180px !important;
    height: 70px !important;
    background: url(${IntroUpArrowDesktop.src}) no-repeat;
    top: -75px;
    left: 40%;
    transform: rotate(-5deg);
  }
`;

export const IntroDownArrowContainer = styled.div`
  max-width: 58.5%;
  width: 100%;
  height: 50px;
  position: absolute;
  left: 21%;
  bottom: -60px;
  overflow: hidden;

  @media (min-width: 1024px) {
    max-width: unset;
    width: 170px;
    height: 30px;
    bottom: 50px;
    left: 120%;
  }

  div {
    width: 121px !important;
    height: 50px;
    background: url(${IntroDownArrow.src}) no-repeat;
    bottom: 50px;

    @media (min-width: 1024px) {
      width: 170px !important;
      height: 30px;
      background: url(${IntroDownArrowDesktop.src}) no-repeat;
    }
  }
`;

export const ServicesArrowContainer = styled.div`
  height: 360px !important;
  width: 24px;
  background: url(${ServicesArrow.src}) no-repeat;
  position: absolute !important;
  bottom: 102%;
  left: 45%;

  @media (min-width: 1024px) {
    background: url(${ServicesArrowDesktop.src}) no-repeat;
    bottom: -50%;
    left: 83%;
  }
`;
