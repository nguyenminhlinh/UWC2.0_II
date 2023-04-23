import React, { useState } from 'react';
import './chat.css';
import {FiSend} from 'react-icons/fi';

const Chat = () => {
  const [messages, setMessages] = useState([{ sender: 'Collector', message: 'hi' }]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== '') {
     
        setMessages([...messages, { sender: 'Back officer', message: newMessage }]);
    
      setNewMessage('');
    }
  };

  return (
    <div className="chat-box">
        <div className="message-content">
            <p className="message-date">19, tháng 4, 2023</p>
            {messages.map((message, index) => (
                <>
                <div className="sender" key={index}>
                    <p className="message-sender">{message.sender}</p>
                    <p className="message-sender-content">{message.message}</p>
                </div>
                </>
            ))}
        </div>
        <div className='message-input'>
            <input className="message-input-content" type="text" placeholder = "Enter message..." value={newMessage} onChange={handleInputChange}/>
            <button className="message-input-button" onClick={handleSendMessage}><FiSend className="icon" size={32} color = "gray"/></button>
        </div>
    </div>
  );
};

export default Chat;
