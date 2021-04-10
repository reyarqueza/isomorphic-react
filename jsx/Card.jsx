import React from 'react'

export default function(props) {
  return (
    <div className="rs-card">
      <img
        sizes={props.sizes}
        srcSet={props.srcSet}
        src={props.src}
        alt={props.alt}
      />
      <p>{props.text}</p>
    </div>
  )
}
