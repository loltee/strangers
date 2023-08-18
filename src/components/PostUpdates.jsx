import React, { useState } from 'react';

const PostUpdate = ({id, onUpdate }) => {
  const [newContent, setNewContent] = useState('');

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };

  const handleUpdateClick = () => {
    onUpdate(id,newContent);
    setNewContent('');
  };

  return (
    <div>
      <h3>Update Post</h3>
      <textarea
        value={newContent}
        onChange={handleContentChange}
        placeholder="Enter new content..."
      />
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
};

export default PostUpdate;