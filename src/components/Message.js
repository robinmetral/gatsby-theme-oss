import React from "react"

const Message = (props) => {
  return (
    <div
      style={{
      maxWidth: "30em",
      padding: "0 1em",
      }}
    >
      <p
        style={{
        fontFamily: props.messageFont,
        color: props.color,
        fontSize: "1em",
        textAlign: "center",
        }}
      >{props.message}</p>
    </div>
    )
}

export default Message
