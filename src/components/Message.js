import React from "react"

const Message = (props) => {
  return (
    <div
      style={{
      maxWidth: "60vw",
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
