import React from "react";
import "./MessageInput.scss";

const MessageInput = () => {
    return (
        <div className="MessageInput">
            <div className="message">
                <textarea name="message" id="message" placeholder="Message*" required></textarea>
            </div>
        </div>
    );
};

export default MessageInput;
