import React from 'react'

export default function(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  )
}
