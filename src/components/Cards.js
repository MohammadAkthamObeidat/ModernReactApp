import React from "react";
import CardItem from "./CardItem";
import "../css/cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../res/images/img-9.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src={require("../res/images/img-2.jpg")}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={require("../res/images/img-9.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src={require("../res/images/img-2.jpg")}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />

            <CardItem
              src={require("../res/images/img-3.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
