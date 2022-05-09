import styled from "styled-components"

export const Wrapper = styled.div`
width: 100%;
height: 500px;
box-shadow: 0px 0px 10.5796px 3.17389px rgba(0, 0, 0, 0.3);

@media (min-width: 1024px) {
    background-color: #121212;
}
`

export const FooterMobile = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
color: white;

h1 {
    font-size: 60px;
    font-weight: 500;
    margin: 30px 0px 15px 0px;
}

h2 {
    font-size: 21px;
    font-weight: 800;
}

>span {
    font-size: 21px;
}

.iconContainer {
    display: flex;
    gap: 20px;

    >div {
        width: 57px;
        height: 57px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: white;
        color: black;
        font-size: 30px;
    }
}
.politicContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 35px;
    color: #888888;

    >span {
        opacity: 0.5;
        font-size: 15px;
    }

    >div {
        display: flex;
        gap: 38px;
        font-size: 18px;
    }
}
`

