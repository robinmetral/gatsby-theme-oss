import React from "react"

const Title = (props) => {
  return (
      <h1
        style={{
        fontFamily: props.titleFont,
        color: props.color,
        fontSize: "8vw",
        fontWeight: "normal",
        margin: "0",
        }}
      >{ props.title }</h1>
    )
}

export default Title
