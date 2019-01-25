import React from "react"

const Social = (props) => {
  return (
    <ul>
      <li href={ "https://github.com/" + props.github }>GitHub</li>
      <li href={ "https://twitter.com/" + props.twitter }>Twitter</li>
    </ul>
  )
}

export default Social
