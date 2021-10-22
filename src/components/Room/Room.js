import React from 'react';
import { useHistory } from 'react-router';

const Room = (props) => {
  const {title, description, imgUrl, bedType, price} = props.room;

  const history = useHistory()
  const handleBook = (bedType) => {
      history.push(`/book/${bedType}`);
  }

  return (
    <div className="room">
      <img style={{width: '90%'}} src={imgUrl} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{bedType}</p>
      <h4>{price}</h4>
      <button onClick={() => handleBook(bedType)}>Book Room</button>
    </div>
  );
};

export default Room;