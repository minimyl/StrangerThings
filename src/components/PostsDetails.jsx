import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

const PostsDetails = (props) => {
    const { postId } = useParams()
console.log(postId, "you are not the father")



//     const post = props.post;
//     const [formDetails, setFormDetails] = useState({
//         title:'',
//         description:'',
//         price:'',
//         location:'',
//         willDeliver:'',
//     })
// useEffect(() => {
//     setFormDetails(
//         {
//             title: post.title,
//             description: post.description,
//             price: post.price,
//             location: post.location,
//         })
// },[])
  
  
  return (
   
   <h3>this is posts details component</h3>
    // <div className="singlePostBody">
    //   <h3 className="postTitle">{post.title}</h3>
    //   {post.location}
    //   {post.description}
    //   {post.price}
    //   <Link to={`/posts`}>
    //     <button className="postDetailsButton">Go Back</button>
    //   </Link>
    // </div>
  
    
  
  );
};
export default PostsDetails;