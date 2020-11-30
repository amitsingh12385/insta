import React from "react";
import Read from "../shared/icons/Read";

const Chat = ({ chat }) => {
  return (
    <div className="card__chat">
      {chat["to"] && <div className="card__to">{chat["to"].message}</div>}
      {chat["to"] && (
        <div className="card__toTimeMain">
          <div
            className="card__toTime"
            style={{ float: "right", transform: "translateX(-3.5rem)" }}
          >
            <span style={{marginRight: "3rem"}}>{chat["to"].time}</span>
            <span>
              <Read />
            </span>
          </div>
        </div>
      )}
      {chat["from"] && <div className="card__from">{chat["from"].message}</div>}
      {chat["from"] && (
        <div className="card__fromTime">{chat["from"].time}</div>
      )}
    </div>
  );
};

export default Chat;
