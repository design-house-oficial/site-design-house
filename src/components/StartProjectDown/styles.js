import styled from "styled-components";
import fontGrid from "../../assets/svg/fontGrid.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    gap: 50px;
    padding: 10px 25px 10px 25px;
    transition: all 0.5s ease;

    > div {
      font-size: 16px;
    }

    :hover {
      background: rgba(7, 105, 252);
      transform: scale(1.05);
    }
  }
`;

export const ButtonTop = styled.div`
  width: 80%;
  height: 100px;
  margin: 10px 0px 40px 0px;
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.buttonBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (min-width: 1024px) {
    margin: 100px 0px 100px 0px;
    transition: all 0.5s ease;
    height: 300px;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px 0px 30px 0px;

  p {
    font-size: 35px;
    display: inline;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.9px;
    -webkit-text-stroke-color: rgb(255, 255, 255, 0.5);
  }

  > div {
    width: 250px;
    height: 34px;
    line-height: 30px;
    display: flex;
    gap: 6.2px;
    background: url(${fontGrid.src}) no-repeat;
    font-size: 34px;
    padding-left: 13.6px;
    span {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.9px;
      -webkit-text-stroke-color: rgb(255, 255, 255, 0.4);
      margin-top: 1.5px;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 84px;
    }

    > div {
      background-size: cover;
      width: 527px;
      height: 72px;
      font-size: 85px;
      gap: 7px;
      padding-left: 23px;

      span {
        cursor: default;
        ::selection {
          display: none;
        }
        margin-top: 15px;
        :hover {
          transition: 1s;
          -webkit-text-stroke: 2.2px white;
        }
      }
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  margin-bottom: 20px;

  .border {
    height: 192px;
    border-left: 1px solid #292929;
    display: none;
  }

  p {
    width: 95%;
    max-width: 395px;
    font-size: 16px;
    font-weight: 400;
    line-height: 23.92px;
    text-align: justify;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 60px;
    margin-bottom: 100px;

    .border {
      display: inline-block;
    }
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  >div {
    display: flex;
    align-items: center;
    gap: 10px;

    >div {
      width: 25px;
      height: 25px;
    }

    .interface {
      background-image: url(${props => props.iconInterface});
      background-size: contain;
      background-repeat: no-repeat;
    }
    .copyright {
      background-image: url(${props => props.iconCopyright});
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 4px;
    }
    .maps {
      background-image: url(${props => props.iconMaps});
      background-size: contain;
      background-repeat: no-repeat;
    }
    .query {
      background-image: url(${props => props.iconQuery});
      background-size: contain;
      background-repeat: no-repeat;
    }
    .search {
      background-image: url(${props => props.iconSearch});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  @media (min-width: 1024px) {
    gap: 25px;
  }
`;

export const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
