import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  border: ${(props) => props.border && props.border};
  font-size: ${(props) => props.fontSize && props.fontSize};
  border-radius: 100%;

  i {
    color: ${(props) => props.color && props.color};
  }
`;
