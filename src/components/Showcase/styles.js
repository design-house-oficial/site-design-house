import styled from "styled-components";
import background from "../../assets/svg/showcaseBackground.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
  }
`;

export const ImageContainer = styled.div`
  width: 95.5%;
  max-width: 408.73px;
  height: 308px;
  background: url(${background.src}) no-repeat;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 768px;
    background-size: contain;
    height: 627px;
  }
`;

export const ShowcaseContainer = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  position: absolute;
  top: 6%;
  left: 40%;
  display: flex;
  align-items: center;

  >div {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.showcase});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    left: 25%;
  }
`;

export const ShowcaseIconContainer = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  position: absolute;
  top: 36.5%;
  left: 80%;

  >div{
    width: 100%;
    height: 100%;
    background-image: url(${props => props.showcaseIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    left: 68%;
  }
`;

export const ShowcaseText = styled.div`
  width: 95.5%;
  max-width: 408.73px;
  color: white;
  margin-bottom: 30px;

  .btnShowcase {
    display: none;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;

    span {
      background: linear-gradient(
        to right,
        #bdf419,
        #a4e31c,
        #9ddd27,
        #8ad03d,
        #6fbd5c,
        #4da584,
        #3494a1
      );
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 1024px) {
    p {
      margin-bottom: 20px;
    }
    .btnShowcase {
      display: flex;
      justify-content: center;
    }
  }
`;
