import React from 'react'

export default function(props) {
  return (
    <div className="rs-hero">
      <img
        sizes={props.sizes}
        srcSet={props.srcSet}
        src={props.src}
        alt={props.alt}
      />
      <h1>{props.text}</h1>
      {props.children}
    </div>
  )
}
