import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body, html {
  font-family: "Kanit";
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

button {
  cursor: pointer;
}
`
export default GlobalStyles