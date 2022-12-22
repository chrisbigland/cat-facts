import React from 'react'
import './Button.scss'

const Button = (props) => {
  const { text, updateFacts } = props;
  return (
    <div>
      <button onClick={updateFacts} className="btn">{text}</button>
    </div>
  )
}

export default Button
