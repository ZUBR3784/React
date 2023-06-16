import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'


function AllPosts() {

    const [posts,setPosts] = useState([])
        
        useEffect(()=>{
            async function getPosts(){
                 try {
                    const getPost = await axios.get('https://jsonplaceholder.typicode.com/posts ');
                    setPosts(getPost.data)
                    
                    if (getPost.status !== 200){
                        throw new Error('Такого поста нет');
                    }
                    
                    } catch (error) {
                        console.error(error);
                }
            }
            getPosts()
            
        },[])
        

  return (
    <>
       

        {posts.map((post) => (
            
            <div key={post.id}>
                <h2>user id: {post.userId}</h2>
                <h3>post id: {post.id}</h3>
                <Link to={`/posts/${post.id}`}>More info</Link>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>

            
        ))}



           
        
    
    </>
  )
}

export default AllPosts