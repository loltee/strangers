import React, { useState } from 'react';
import PostUpdate from './PostUpdate';

const Post = ({ post, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleToggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  const Post = ({ post, onDelete }) => {
    const handleDeleteClick = () => {
      onDelete(post.id);
    };


  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleToggleUpdateForm}>Edit</button>
      <button onCLick= {handleDeleteCLick}>Delete</button>
      {showUpdateForm && (
        <PostUpdate postId={post.id} onUpdate={onUpdate} />
      )}
    </div>
    
  );
};

export default Post;