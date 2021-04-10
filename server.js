import express from 'express'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Article from './jsx/Article.jsx'
import Card from './jsx/Card.jsx'
import Content from './jsx/Content.jsx'
import Footer from './jsx/Footer.jsx'
import Header from './jsx/Header.jsx'
import Hero from './jsx/Hero.jsx'
import IntroText from './jsx/IntroText.jsx'
import Nav from './jsx/Nav.jsx'

// server side
import wrapper from './wrapper'

const app = express()
const port = 3333

// pages
function home (req, res) {
  res.send(
    wrapper(
      ReactDOMServer.renderToString(
        <Article>
          <Header>
            <Nav
              list={[
                {label: 'Home', url: '/'},
                {label: 'Producs', url: '/'},
                {label: 'Services', url: '/'},
                {label: 'Blog', url: '/'},
                {label: 'Forum', url: ''}
              ]}
            />
          </Header>
          <Content>
            <Hero
              src="/images/robert-bye-XLK1tJqvIt4-unsplash.jpg"
              alt="Hero image of a crowded New York city."
              text="Welcome To The Jungle!"
            />
            <IntroText
              text1="Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book."
              text2="It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged."
              text3="It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum." />
          </Content>
          <Footer
            list={[
              {label: 'Terms & Conditions', url: '/'},
              {label: 'Privacy Policy', url: '/'},
              {label: 'About Us', url: '/'},
              {label: 'Contact Us', url: ''}
            ]}
          />
        </Article>
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
