const COHORT_NAME = '2302-acc-et-web-pt-e'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`; 
const token = 'Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9'

async function getallposts() {
    try{
        const response = await fetch(`${BASE_URL}/posts`)          
        const result = await response.json();
         console.log(result);
              return result.data.posts
            } catch (err) {
              console.error(err);
            }
          
    
}
async function httpcreatemessage(id,content){
    try{
        const response = await fetch (`${BASE_URL}/posts/${id}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message:content })
          })
            return response
    }catch(err){
        console.log("There was a error",err)
    }
   
}
async function registeruser(user) { 
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {user})
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }
async function loginUser(user){
    try{
        const response = await fetch(
            `${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {user})
          });
          const result =await response.json();
          console.log(result)
          return result
    }catch (err){
        console.log("There was a error",err)
    }



}
async function httpUpdatePost(postId, newContent){
    try{
        const response =  fetch(`${BASE_URL}/posts/${postId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: newContent })
          })
          return response
     }catch(error){
        console.error('Error updating post:', error)
     } 
    }
       
  export {registeruser,getallposts,loginUser,httpUpdatePost,httpcreatemessage}