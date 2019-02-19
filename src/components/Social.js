import React from "react"
import { SocialIcon } from "react-social-icons"
import Transition from "react-transition-group/Transition"

import { defaultStyle, transitionStyles } from "../transitions"

const Social = (props) => (
  <Transition in appear={true} timeout={2000}>
    {(state) => (
    <ul
      style={{
      listStyleType: "none",
      display: "flex",
      ...defaultStyle,
      ...transitionStyles[state],
      }}
    >
      {
      props.social.map(icon => (
      <li
        style={{
        padding: "0.5rem",
        }}
      ><SocialIcon url={icon} bgColor={props.color} /></li>
      ) )
      }
    </ul>
    )}
  </Transition>
)

export default Social
