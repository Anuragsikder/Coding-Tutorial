import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from "../components/Comment"
import { URL } from '../url'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetails = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchPost = async () => {
        setLoading(true);
        const res = await axios.get(`${URL}/api/posts/${params.id}`);
        setPost(res.data);
        setLoading(false);
      };
      fetchPost();
      
    }, [])

    if(loading){

      return(
        <>
          <Navbar/>
          <div className="flex justify-center items-center h-[80vh]">
            <h1 className="text-3xl font-bold">Loading...</h1>
          </div>
        </>
      )
    }

    return (
      <div>
          <Navbar/>
          <div className="px-8 md:px -[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font bold text-black md:text-3xl">{post.title}</h1>
            <div className="flex items-center justify-center space-x-2">
              <p><BiEdit/></p>
              <p><MdDelete/></p>
 
            </div>
         
               
             
          </div>
          <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@{post.username}</p>
        <div className="flex space-x-2">
          <p>5/09/2024</p>
          <p>10:45</p>
        </div>

          </div>
          <img src={URL+"/api/images/"+post.photo} className=" mx-auto mt-8  h-96"/>  
  
           <p className="mx-auto mt-8">{post.desc}</p>
           <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {
                post.categories.map((cat)=>(
                  <div className="bg-gray-300 rounded-lg px-3 py-1">{cat}</div>
                ))
              }
              
            </div>




           </div>
           <div className="flex flex-col mt-4">
           <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            <Comment/>
            



           </div>
           {/*write a comment*/}
           <div className="w-full flex flex-col mt-4 md:flex-row">
             <input type="text" placeholder="write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
             <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>




           </div>




 
          </div>
          <Footer/>
      </div>
    )
  }
 
  export default PostDetails
