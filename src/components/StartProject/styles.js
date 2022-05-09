import styled from "styled-components";
import background from "../../assets/svg/man-ideias1.svg";

export const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 425px;
  background: url(${background.src}) no-repeat;

  @media (min-width: 1024px) {
  }

  @media (min-width: 1240px) {
    height: 625px;
    background-position: -260px 0%;
    background-size: 1172px 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: white;
  margin-bottom: 40px;

  p {
    width: 330px;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
  }

  h2 {
    font-weight: 300;
    font-size: 20px;
  }

  span {
    background: linear-gradient(to right, #bcf400, #caf53d);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    gap: 25px;
    position: absolute;
    top: 30%;
    right: 4%;
  }

  @media (min-width: 1024px) {
    right: 7%;
    h2 {
      width: 420px;
      font-size: 42px;
      line-height: 44px;
    }

    button {
      padding: 13px 25px 13px 25px;
      gap: 40px;
      font-size: 22px;
      > div {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media (min-width: 1240px) {
    right: 10%;
  }
`;
