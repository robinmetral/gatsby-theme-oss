import React from "react"
import Transition from "react-transition-group/Transition"

const duration = 400

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const Title = (props) => (
  <Transition in appear={true} timeout={duration}>
    {(state) => (
    <div
      style={{
      padding: "1em",
      ...defaultStyle,
      ...transitionStyles[state],
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
    )}
  </Transition>
)

export default Title
