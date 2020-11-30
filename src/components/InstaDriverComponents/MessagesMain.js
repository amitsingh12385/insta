import React from "react";
import Card from "./Cards";
import MessagesBox from "./MessageBox";

const MessagesMain = ({ message, messages, onCardSelected }) => (
  <div className="messages__main u-margin-top-medium-1">
    <div className="messages__left">
      <div style={{ height: "76rem", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <div key={index}>
            <Card
              message={message}
              index={index}
              onCardSelected={onCardSelected}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="messages__right">
      <MessagesBox message={message} />
    </div>
  </div>
);

export default MessagesMain;
