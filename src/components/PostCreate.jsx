import React, { useState } from 'react';

const PostCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCreateClick = () => {
    if (title && content) {
      onCreate({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h3>Create New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
};

export default PostCreate;