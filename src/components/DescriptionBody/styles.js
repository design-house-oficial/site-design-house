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
import designWhite from "../../assets/svg/DesignWhite.svg";
import designColor from "../../assets/svg/DesignColor.svg";
import andWhite from "../../assets/svg/&White.svg";
import andColor from "../../assets/svg/&Color.svg";
import solutionWhite from "../../assets/svg/solucoesWhite.svg";
import solutionColor from "../../assets/svg/solucoesColor.svg";

export const Wrapper = styled.div`
  width: 100%;
  color: white;
  align-self: center;
  max-width: 428px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 1240px;
    height: 550px;

    .background {
      background: url(${BackgroundDescriptionDesktop.src});
      background-size: cover;
      width: 300px;
      height: 300px;
      position: absolute;
      top: 3%;
      left: 11%;
    }

    .goal {
      position: absolute;
      top: 0%;
      left: 0%;
    }

    .introduce {
      position: absolute;
      bottom: 0%;
      left: 0%;
    }

    .services {
      position: absolute;
      right: 0%;
      bottom: 0%;
    }
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

  .text-center {
    margin: 85px 0px 120px 0px;
    display: flex;
    gap: 10px;
    align-self: center;

    >div {
      cursor: pointer;
    }

    .design {
      width: 120px;
      height: 40px;
      background-image: url(${designWhite.src});
      background-size: contain;
      background-repeat: no-repeat;
      animation: all 0.5s ease;

      :hover {
        background-image: url(${designColor.src});
      }
    }
    .and {
      width: 30px;
      height: 30px;
      background-image: url(${andWhite.src});
      background-size: contain;
      background-repeat: no-repeat;
      animation: all 0.5s ease;

      :hover {
        background-image: url(${andColor.src});
      }
    }
    .solution {
      width: 150px;
      height: 40px;
      background-image: url(${solutionWhite.src});
      background-size: contain;
      background-repeat: no-repeat;
      animation: all 0.5s ease;

      :hover {
        background-image: url(${solutionColor.src});
      }
    }

    @media (min-width: 768px) {
      .design {
        width: 160px;
        height: 50px;
      }
      .and {
        width: 35px;
        height: 40px;
      }
      .solution {
        width: 220px;
        height: 50px;
      }
    }

    @media (min-width: 1024px) {
      margin: 0 !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .design {
        width: 270px !important;
        height: 80px !important;
      }
      .and {
        width: 60px !important;
        height: 85px !important;
      }
      .solution {
        width: 350px !important;
        height: 80px !important;
      }
    }

    @media (min-width: 1366px) {
      margin: 110px 0px 120px 150px;

      .design {
        width: 250px;
        height: 80px;
      }
      .and {
        width: 50px;
        height: 70px;
      }
      .solution {
        width: 330px;
        height: 80px;
      }
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
    width: 43%;
    background: none;
    text-align: unset;
    margin: 0;
    
    >div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    h3 {
      max-width: 100%;
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
    width: 100px;
    background: url(${ServicesArrowDesktop.src}) no-repeat;
    bottom: -50%;
    left: 83%;
  }
`;
