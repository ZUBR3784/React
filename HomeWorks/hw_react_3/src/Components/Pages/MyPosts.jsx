import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'



function MyPosts() {
    
   



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

   

    const {id} = useParams()
    const post = posts.find((elem)=>elem.id = id)
    console.log(post);
  return (
    <>
   {
    <div >
        <h2>userId:{post.userId}</h2>
        <h3>id:{post.id}</h3>
        <p>title:{post.title}</p>
        <p> body{post.body}</p>
    </div>}
    
    </>
  )
}

export default MyPosts