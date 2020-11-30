import React, { useState } from "react";

import Chat from "./Chat";
import Info from "../shared/icons/Info";
import Elipsis from "../shared/icons/Elipsis";
import ContactInfoPopup from "./ContactInfoPopup";
import EllipsisPopup from "./EllipsisPopup";
import Flyer from "../shared/icons/Flyer";
import Pin from "../shared/icons/Pin";
import Smiley from "../shared/icons/Smiley";
import Mic from "../shared/icons/Mic";

const MessageBox = ({ message }) => {
  const [contactInfoToggle, setContactInfoToggle] = useState(false);
  const [ellipsisToggle, setEllipsisToggle] = useState(false);

  const onContactInfoToggle = () => setContactInfoToggle(!contactInfoToggle);
  const onEllipsisToggle = () => setEllipsisToggle(!ellipsisToggle);
  return (
    <div className="card__messageBox">
      <div className="card__messageHeader">
        <div className="card__img card__messageImg">
          <img
            src="./assets/images/img1.jpg"
            style={{ borderRadius: "4rem" }}
          />
          <div className="card__name">Shirly Cook</div>
          <div className="card__username">@JohntheD</div>
        </div>
        <div className="card__messageTitle">{message.title}</div>
        <div
          className="card__messageInfo"
          style={{
            display: "flex",
            alignItems: "baseline",
            position: "relative",
          }}
        >
          {contactInfoToggle && <ContactInfoPopup />}
          <button
            className="btn btn--tertiary"
            onClick={onContactInfoToggle}
            style={{
              display: "flex",
              alignItems: "center",
              padding: ".5rem 1rem",
            }}
          >
            <Info />{" "}
            <span style={{ marginLeft: ".5rem", marginTop: "5px" }}>
              Contact Info
            </span>
          </button>
          <div style={{ marginLeft: "1rem", position: "relative" }}>
            <span onClick={onEllipsisToggle} style={{ cursor: "pointer" }}>
              <Elipsis />
            </span>
            {ellipsisToggle && <EllipsisPopup />}
          </div>
        </div>
      </div>
      <div className="card__messages">
        {message.data.map((chat, index) => (
          <div key={index}>
            <Chat chat={chat} />
          </div>
        ))}
        <div className="card__newMessages">
          <textarea className="form__textarea" />
          <div className="card__messageCTA">
            <div className="card__iconGroup">
              <Pin />
              <Smiley />
              <Mic />
            </div>
            <div>
              <Flyer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
