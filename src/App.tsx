import { GlobalStyle } from "./elements/base"
import { ThemeProvider } from "styled-components"
import { MainContainer } from "./elements/containers"
import { TopBar } from "./components/top-bar"
import { Page } from "./components/main"
import { Footer } from "./components/footer"
import { lightTheme, darkTheme } from "./elements/base/themes"
import { useState, createContext } from "react"
import { Outlet } from "react-router-dom"



function App() {
  const [palette, setPalette] = useState(lightTheme)
  const [isDark, setIsDark] = useState(false)

  function handleThemeSwitch() {
    palette === darkTheme ? setPalette(lightTheme) : setPalette(darkTheme)
    setIsDark(!isDark)
  }

  const GeneralThemeProps = {
    palette,
    setPalette,
    isDark,
    setIsDark,
    handleThemeSwitch
  }

  return (
    <ThemeProvider theme={GeneralThemeProps}>
      <GlobalStyle />
      <MainContainer>
        <TopBar />
        <Page />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
