import React, { useEffect } from "react";
// import "../../src/standalone-frontend/App.css";
import Chatbox from "../../src/static/app.js";

const ChatBot = () => {
  useEffect(() => {
    const chatboxInstance = new Chatbox();
    const args = {
      openButton: document.querySelector(".chatbox__button button"),
      chatBox: document.querySelector(".chatbox__support"),
      sendButton: document.querySelector(".send__button"),
    };
    chatboxInstance.init(args);
  }, []);
  return (
    <>
      <div className="chatbox">
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img
                src="https://cdn-icons-png.flaticon.com/128/508/508139.png"
                alt="no source"
                className="chatbox__image--header"
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Itachi</h4>
              <p className="chatbox__description--header">
                Hi, my name is Itachi. How can I help you?
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div></div>
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              className="chatbox__input"
              placeholder="Write a message...."
            />
            <button className="chatbox__send--footer send__button">Send</button>
          </div>
        </div>
        <div className="chatbox__button">
          <button>
            <img
              src="https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw="
              alt="no source"
              className="chatbox__button-image"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
