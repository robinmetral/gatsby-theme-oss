import React from "react"

const Title = (props) => {
  return (
    <div
      style={{
      padding: "1em",
      }}
    >
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
    </div>
    )
}

export default Title
