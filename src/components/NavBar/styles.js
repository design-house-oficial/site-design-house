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
>div {
  width: 150px;
  height: 50px;
  background-image: url("/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}
`;

export const HambContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
