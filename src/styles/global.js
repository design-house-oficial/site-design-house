import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body, html {
  font-family: "Kanit";
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export default GlobalStyles