import React, { useState, useEffect } from 'react';
import { getallposts,httpUpdatePost,httpcreatemessage } from '../api/requests';
import PostUpdate from './PostUpdates';
import Post from './Post';



  const PostList =() => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    async function fetchPosts() {
     const data = await getallposts()
     console.log(data) 
     setPosts(data)
      
     }
   fetchPosts()

   
   },[])

   const handleUpdate = async (postId, newContent) => {
      await httpUpdatePost (postId,newContent)
        setPosts((prevPost)=> prevPost.map((post)=>{
          if(post.id===postId){
            return {...post, newContent}
          }
          return post
        }))
        
        getallposts()
    };
 const handleAddMessage = async (postId, content) => {
     await httpcreatemessage(postId,{content});
    getallposts()
  };
  
  return (
    
    <div>
      <h2>Posts</h2>
      <ul>
      {posts.map((post) =>(
          <Post key={post.id} post={post} onUpdate={handleUpdate} onAddMessage={handleAddMessage}/>
      ))}
      </ul>
         
        
    
      
    </div>
  );
}





export default PostList;