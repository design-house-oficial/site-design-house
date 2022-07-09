import styled from "styled-components"

export const Wrapper = styled.button`
background: ${props => props.background && props.background};
width: ${props => props.width && props.width};
border: ${props => props.border && props.border};
border-radius: 8px;
display: flex;
gap: ${props => props.gap && props.gap};
align-items: center;
color: ${props => props.color ? props.color : "#FFFFFF"};
padding: ${props => props.padding && props.padding};
outline: none;
`