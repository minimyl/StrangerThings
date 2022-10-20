import React, {useState, useEffect} from "react"
import {Post} from './'


const Search = (props) => {
    const userPosts = props.userPosts
    var setSearchInput = props.setSearchInput
    var [searchInput, setSearchInput] = useState('')
    console.log(searchInput)

function addFilter(userPosts) {
    const filterPost = props.filterPost
    props.result(filterPost.filter((found) => found.title === filterPost.target.value))
    return filterPost.filter((filterPost) => filterPost.title === filterPost)[0]
}
    
function filterPosts() {
    if (!searchInput) {
      return userPosts;
    } else {
      let filteredPosts = userPosts.filter((found) => {
        return found.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredPosts);
      return filteredPosts;
    }
  }

    const handleChange = (e) => {
        e.preventDefault()
        console.log("you can't handle the truth")
        setSearchInput(e.target.value)
    }

    return (
        <div id= "searchBar"> 
        <input 
         type= "search"
        placeholder="search here"
        onChange= {handleChange} />
        {userPosts ? <Post userPosts={filterPosts()} /> : <div>loading...</div>}
        </div>
    )
}




export default Search