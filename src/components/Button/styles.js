import styled from "styled-components"

export const Wrapper = styled.div`
display: inline-block;
width: ${props => props.width && props.width};
background: ${props => props.background && props.background};
border: ${props => props.border && props.border};
border-radius: 8px;

button {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: none;
    gap: ${props => props.gap && props.gap};
    color: ${props => props.color ? props.color : "#FFFFFF"};
    padding: ${props => props.padding && props.padding};
    border: none;
    outline: none;
}
`