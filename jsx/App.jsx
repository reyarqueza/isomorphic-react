import React from 'react'

import Article from './Article.jsx'
import Card from './Card.jsx'
import Columns from './Columns.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Nav from './Nav.jsx'

export default function(props) {
  return (
    <Article>
      <Header>
        <Nav
          list={props.nav}
        />
      </Header>
      <Content>
        {/* generated srcSet at https://www.responsivebreakpoints.com/ */}
        <Hero
          sizes={props.hero.sizes}
          src={props.hero.src}
          srcSet={props.hero.srcSet}
          alt={props.hero.alt}
          text={props.hero.text}
        >
          <p>{props.hero.subtext}</p>
        </Hero>
        <Columns>
          {props.cards.map((card, index) =>
            <Card
              key={index}
              sizes={card.sizes}
              srcSet={card.srcSet}
              src={card.src}
              alt={card.alt}
              text={card.text}
            />
          )}
        </Columns>
      </Content>
      <Footer
        list={props.footer}
      />
    </Article>
  )
}
