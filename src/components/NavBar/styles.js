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
  @media (min-width: 768px) {
    
  }
`;

export const HambContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
