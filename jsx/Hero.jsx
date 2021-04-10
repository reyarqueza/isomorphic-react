import React from 'react'

export default function(props) {
  return (
    <div className="hero">
      <img src={props.src} alt={props.alt} />
      <h1>{props.text}</h1>
    </div>
  )
}
