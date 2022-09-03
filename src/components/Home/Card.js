import React from 'react'
import './Card.css'

const Card = ({item}) => {
  return (
    <div className="card">
        <img className='card-img' src={item.coverImageUrl} alt=""/>
        <p className="card-p">
            {item.title}
        </p>
    </div>
  )
}

export default Card