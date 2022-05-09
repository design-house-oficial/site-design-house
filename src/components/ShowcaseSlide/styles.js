import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff0d;

  @media (min-width: 1024px) {
      height: 505px;
  }
`;

export const UlContainer = styled.ul`
  width: 100%;
  height: 270px;
  max-width: 1152px;
  display: flex;
  gap: 25px;
  overflow-x: scroll;
  margin: 32px 0px 0px 0px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1152px) {
    justify-content: center;
    margin: 100px 0px 0px 0px;
  }
`;

export const SeeMoreContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
color: white;
margin-top: 30px;

h2 {
    font-size: 20px;
    font-weight: 500;
}

@media (min-width: 1152px) {
    flex-direction: row;
    width: 1152px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px 0px 25px;
    margin: 50px 0px 50px 0px;

    >div {
        background: #40404033;
    }
    
    button {
        padding: 10px 15px 10px 15px;
        color: #494949;

        >div {
            border: 2px solid #494949;
        }
    }
}
`