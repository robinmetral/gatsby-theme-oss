import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
`

const Layout = ({ children }) => (
  <Flex>
    {children}
  </Flex>
)

export default Layout
