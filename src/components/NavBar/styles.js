import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 94px;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;
  background-color: ${(props) => props.theme.colors.backgrround};
`;

export const LogoContainer = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 500;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: #F2F2F2;

    span {
      :hover {
      -webkit-text-fill-color: #F2F2F2;
      }
    }

    .ft {
      letter-spacing: -1px;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const HambContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
