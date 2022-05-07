import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 370px;
  position: relative;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  p {
    width: 95%;
    font-size: 36px;
    font-weight: 600;
    color: #fafafa;
    line-height: 70.86px;

    
    @media (min-width: 768px) {
      font-size: 62px;
      line-height: 65.37px;
    }
  }
`;

export const IdeaImageContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 15px;

  img {
    width: 252px !important;

    @media (min-width: 768px) {
      width: 280px !important;
    }
  }
  
  @media (max-width: 370px) {
    top: 70px;
  }

  @media (min-width: 768px) {
    top: unset;
    right: -125px;
    bottom: -55px;
  }
  `;
