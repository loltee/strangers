import React, { Component, useState, useEffect } from 'react'
import './App.css'
import PostList from './components/PostList'
import PostUpdate from './components/PostUpdates';
import PostCreate from './components/PostCreate';
import Post from './components/Post'
import {getallposts} from './api/requests';
import Signup from './components/SignUp';
import { Routes, Route, Link } from 'react-router-dom';
import MessageForm from './components/MessageForm';






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
    
    
 
  console.log(token)
  return (
    
    <div>

<h1>Strangers Things</h1>
<nav>
    <Link to='/' element={<PostList/>}>All posts </Link>
    <Link to="/sign" element={<Signup/>}>Sign up</Link>
  </nav>
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















