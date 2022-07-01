import styled from "styled-components";

export const Wrapper = styled.li`
  min-width: 270px;
  height: 270px;

  @media (min-width: 1152px) {
    border-radius: 8px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 163px;

  >div {
      width: 270px;
      height: 163px;
      background-image: url(${props => props.background});
      background-size: contain;
      background-repeat: no-repeat;
  }

  @media (min-width: 1152px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    >div {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 107px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: #262626;

  >div {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-image: url(${props => props.logo});
    background-size: contain;
    background-repeat: no-repeat;

    @media (min-width: 1152px) {
      width: 52px;
      height: 52px;
    }
  }

  h3 {
    width: 150px;
    font-size: 13px;
    color: white;
    font-weight: 500;
  }

  @media (min-width: 1152px) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
