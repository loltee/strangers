import React, { useState } from 'react';
import PostUpdate from './PostUpdates';
import MessageForm from './MessageForm';

const Post = ({ post, onUpdate, onDelete, onAddMessage }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);



  const handleToggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  
    const handleDeleteClick = () => {
      onDelete(post.id);
    };
 

  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button onClick={handleToggleUpdateForm}>Edit</button>
      {/* <button onCLick= {handleDeleteCLick}>Delete</button> */}
      {showUpdateForm && ( <>
        <PostUpdate postId={post.id} onUpdate={onUpdate} />
      
      <MessageForm postId={post.id} onAddMessage={onAddMessage}/>
      </>)}
    </li>
    
  );
};

export default Post;