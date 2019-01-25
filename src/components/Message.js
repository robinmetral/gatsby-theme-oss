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
        fontFamily: props.textFont,
        color: props.color,
        fontSize: "2vw",
        textAlign: "center",
        }}
      >{props.message}</p>
    </div>
    )
}

export default Message
