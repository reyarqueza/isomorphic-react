import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './jsx/App.jsx'
import props from './public/json/api.json'

// server side
import wrapper from './wrapper'

const app = express()
const port = 3333

// pages
function home (req, res) {
  res.send(
    wrapper(
      ReactDOMServer.renderToString(
        <App {...props} />
      )
    )
  )
}

// static files
app.use(express.static('public'))

// dynamic SSR
app.get('/', home)

app.listen(port, () => {
  console.log(`Open your browser at http://localhost:${port}`)
})
