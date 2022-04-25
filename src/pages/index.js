import GlobalStyles from "../styles/global"
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { ThemeProvider } from "styled-components"
import dark from "../styles/theme/dark"

export default function Main() {
  return (
    <>
      <ThemeProvider theme={dark} >
        <GlobalStyles/>
        <Header/>
        <Home/>
      </ThemeProvider>
    </>
  )
}