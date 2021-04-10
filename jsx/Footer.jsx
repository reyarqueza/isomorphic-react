import React from 'react'

export default function(props) {
  return (
    <footer className="footer">
      <ul>
        {props.list.map((item, index) =>
          <li key={index}>
            <a href={item.url}>
              {item.label}
            </a>
          </li>
        )}
      </ul>
    </footer>
  )
}
