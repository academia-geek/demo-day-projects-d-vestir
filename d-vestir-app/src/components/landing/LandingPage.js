import React from 'react'
import NewsLetter from '../NewsLetter'
import { data } from '../categories/data'
import Card from '../categories/Card'
import Comment from '../comments/Comment'
import Header from '../header/Header'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Comment />
      <NewsLetter />
    </div>
  )
}

export default LandingPage