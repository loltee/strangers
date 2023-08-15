import { Component, useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import PostUpdate from './components/PostUpdates';
import PostCreate from './components/PostCreate';
import Post from './components/Post'


const COHORT_NAME = '2302-acc-et-web-pt-e'
const BASE_URL = 'https://strangers-things.herokuapp.com/'; 

const Pupdate = ({ postId, onUpdate }) => {
  const [newContent, setNewContent] = useState('');

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };

  const handleUpdateClick = () => {
    onUpdate(postId, newContent);
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

const MessageForm = ({ postId, onAddMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAddClick = () => {
    onAddMessage(postId, message);
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

const Post = ({ post, onDelete, onUpdate, onAddMessage }) => {
  const handleDeleteClick = () => {
    onDelete(post.id);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      <PostUpdate postId={post.id} onUpdate={onUpdate} />
      <MessageForm postId={post.id} onAddMessage={onAddMessage} />
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);
  const [deletedPostId, setDeletedPostId] = useState(null);

  useEffect(() => {
    
    fetch(`${BASE_URL}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [deletedPostId]);

  const handleDelete = (postId) => {
    fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 204) {
          setDeletedPostId(postId);
        } else {
          console.log('Error deleting post:', response.status);
        }
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  const handleUpdate = (postId, newContent) => {
    fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: newContent })
    })
      .then(response => response.json())
      .then(updatedPost => {
        const updatedPosts = posts.map(post =>
          post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  const handleAddMessage = (postId, message) => {
    fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(response => response.json())
      .then(updatedPost => {
        const updatedPosts = posts.map(post =>
          post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Error adding message:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stranger Things Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Post
                post={post}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                onAddMessage={handleAddMessage}
              />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;















export default App
