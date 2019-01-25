import React from "react"
import { SocialIcon } from "react-social-icons"

const Social = (props) => {
  return (
    <ul
      style={{
      listStyleType: "none",
      display: "flex",
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
    )
}

export default Social
