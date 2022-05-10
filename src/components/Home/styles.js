import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;
