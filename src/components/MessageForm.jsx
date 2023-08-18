import React, { useState } from 'react';

const MessageForm = ({postId,onAddMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddClick = () => {
    onAddMessage(postId,message);
    setMessage('');
  };

  return (
    <div>
      <h3>Add Message</h3>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message..."
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default MessageForm;