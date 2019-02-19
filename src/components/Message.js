import React from "react"
import Transition from "react-transition-group/Transition"

import { defaultStyle, transitionStyles } from "../transitions"

const Message = (props) => (
  <Transition in appear={true} timeout={1200}>
    {(state) => (
    <div
      style={{
      maxWidth: "30em",
      padding: "0 1em",
      ...defaultStyle,
      ...transitionStyles[state]
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
    )}
  </Transition>
  )

export default Message
