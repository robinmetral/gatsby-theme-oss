import React from "react"

const Bio = (props) => {
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
      >{props.bio}</p>
    </div>
    )
}

export default Bio
