import React from "react";

const Card = ({ message, index, onCardSelected }) => (
  <div
    className={`card ${index % 2 === 0 ? "card__dark" : "card__light"}`}
    onClick={() => {
      onCardSelected(index);
    }}
  >
    <div className="card__main">
      <div className="card__index">Chat ID: {message.id}</div>
      <div className="card__time">{message.time}</div>
      <div className="card__unseen">{message.unseen}</div>
      <div className="card__img">
        <img src={`./assets/images/img${(index % 3) + 1}.jpg`} style={{borderRadius: "10rem"}} />
        <div className="card__name">{message.firstName + " " + message.lastName}</div>
        <div className="card__username">@{message.username}</div>
      </div>
      <div className="card__description">
        <div className="card__title">{message.title}</div>
        <div className="card__subtitle">{message.subtitle}</div>
      </div>
    </div>
  </div>
);

export default Card;
