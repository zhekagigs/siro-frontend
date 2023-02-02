import React from 'react';

type Props = {
  info: {
    accesibility: number,
    activity: string,
    key: string,
    link: string,
    participants: 1,
    price: number,
    type: string
  }
}

const Card: React.FC<Props> = ({ info }) => {
  return (
    <div className="card">
      <h2>{info.activity}</h2>
      <p>Price: {info.price}</p>
      <p>Type: {info.type}</p>
      <p>Number of Participants: {info.participants}</p>
    </div>
  )
}

export default Card;