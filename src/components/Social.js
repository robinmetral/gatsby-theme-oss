import React from "react"

const Social = (props) => {
  return (
    <ul>
      <li><a href={ "https://github.com/" + props.github }>GitHub</a></li>
      <li><a href={ "https://twitter.com/" + props.twitter }>Twitter</a></li>
    </ul>
    )
}

export default Social
