import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "particles/GlobalStyle"
import SEO from "particles/SEO"
import ThemeDefault from "particles/ThemeDefault"

import Contact from "organisms/contact"
import Footer from "organisms/footer"
import Header from "organisms/header"

type BaseProps = {
  children?: any
  context?: any
  cta: boolean
}

const Base = ({ children, context, cta = true }: BaseProps) => (
  <ThemeProvider theme={ThemeDefault}>
    <React.Fragment>
      <GlobalStyle />
      <SEO data={context} />
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        {cta !== false && <Contact />}
        <Footer />
      </div>
    </React.Fragment>
  </ThemeProvider>
)

Base.defaultProps = {
  cta: false,
}

export default Base
