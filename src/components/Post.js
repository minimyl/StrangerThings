import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom'

const Post = () => {
    const [userPosts, setUserPosts] = useState([])
console.log("post", userPosts)

    useEffect(() => {
        const fetchPost = async() => {
            const database = await fetch("https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts")
            const data = await database.json()
console.log(database)
            setUserPosts(data)

        }
        fetchPost()
    },[])

    return (
        <div>
            <h2>post</h2>
            {
                userPosts.map(userPost => <div key={userPost.id}>{userPost.title}</div>)
            }
        </div>
    )
}

export default Post