import React from "react"
import styled from "styled-components"

import GlobalStyle from "./GlobalStyle.js"

const Flex = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <Flex>
    <GlobalStyle/>
    {children}
  </Flex>
)

export default Layout
