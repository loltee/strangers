import React, { Component, useState, useEffect } from 'react'
import './App.css'
import PostList from './components/PostList'
import PostUpdate from './components/PostUpdates';
import PostCreate from './components/PostCreate';
import Post from './components/Post'
import {getallposts} from './api/requests';
import Signup from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import MessageForm from './components/MessageForm';





// const MessageForm = ({ postId, onAddMessage }) => {
//   const [message, setMessage] = useState('');

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleAddClick = () => {
//     onAddMessage(postId, message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <h3>Add Message</h3>
//       <textarea
//         value={message}
//         onChange={handleMessageChange}
//         placeholder="Enter your message..."
//       />
//       <button onClick={handleAddClick}>Add</button>
//     </div>
//   );
// };

const Write = ({ post, onDelete, onUpdate, onAddMessage }) => {
  console.log("in right component",post)
  
  // const handleDeleteClick = () => {
  //   onDelete(post._id);
  // };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {/* <button onClick={handleDeleteClick}>Delete</button> */}
      {/* <Pupdate postId={post._id} onUpdate={onUpdate} /> */}
      {/* <MessageForm postId={post._id} onAddMessage={onAddMessage} /> */}
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);


  // const [deletedPostId, setDeletedPostId] = useState(null);
const [token, setToken] = useState(window.localStorage.getItem("token")|| null);
  
    useEffect(() => {
      if (token) {
        window.localStorage.setItem("token",token)
      }else {
        window.localStorage.removeItem("token")
      }
    }, [token])

    // fetch(`${BASE_URL}/posts`)
    //   .then(response => response.json())
    //   .then(data => setPosts(data))
    //   .catch(error => console.error('Error fetching data:', error));
    // }, [deletedPostId]);

  // const handleDelete = (postId) => {
  //   fetch(`${BASE_URL}/posts/${postId}`, {
  //     method: 'DELETE'
  //   })
  //     .then(response => {
  //       if (response.status === 204) {
  //         setDeletedPostId(postId);
  //       } else {
  //         console.log('Error deleting post:', response.status);
  //       }
  //     })
  //     .catch(error => console.error('Error deleting post:', error));
  // };

 

 
 
 
  console.log(token)
  return (
    
    <div>

<h1>Stranger Things</h1>

    <Routes>
      <Route path='/' element={<PostList/>}/>
      <Route path='/sign' element={<Signup setToken={setToken}/>}/>
      <Route path='/message' element={<MessageForm/>}/>
      <Route path='/create' element={<PostCreate/>}/>
      </Routes>
      {/* <header className="App-header">
        <h1>Stranger Things Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Write
                post={post}
                // onDelete={handleDelete}
                // onUpdate={handleUpdate}
                // onAddMessage={handleAddMessage}
              />
            </li>
          ))}
        </ul>
      </header> */}
    


</div>

  );
}

export default App;















