import React from "react"

const Title = (props) => {
  return (
      <h1
        style={{
        fontFamily: props.titleFont,
        color: props.color,
        fontSize: "3em",
        fontWeight: "normal",
        margin: "0",
        textAlign: "center",
        }}
      >{ props.title }</h1>
    )
}

export default Title
