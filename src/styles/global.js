import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body, html {
  font-family: "Kanit";
  overflow-x: hidden;
}

body {
  ::-webkit-scrollbar {
    width: 12px;
    background-color: #121212;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #424242;

    :hover {
      background-color: #525252;
    }
  }
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