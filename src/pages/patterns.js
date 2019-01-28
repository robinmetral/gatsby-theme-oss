import React from "react"
import Helmet from "react-helmet"

import "../styles/main.css"
import Patterns from "../styles/patterns.json"

const PatternsPage = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Available patterns</title>
    </Helmet>
    <p style={{textAlign: "center"}}>Hover over a pattern to see its name</p>
    <div
      style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      }}
    >
      { Patterns.patterns.map(pattern => (
      <div
        key={pattern.name}
        title={pattern.name}
        style={{
        height: "15em",
        minWidth: "15em",
        margin: "0.5em",
        backgroundImage: pattern.backgroundImage,
        backgroundColor: pattern.backgroundColor,
        backgroundSize: pattern.backgroundSize,
        backgroundPosition: pattern.backgroundPosition,
        }}
      ></div>
      ) ) }
    </div>
</>
  )
}

export default PatternsPage
