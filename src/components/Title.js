import React from "react"

const Title = (props) => {
  return (
      <h1
        style={{
        fontFamily: props.titleFont,
        color: props.color,
        fontSize: "8vw",
        }}
      >{ props.title }</h1>
    )
}

export default Title
