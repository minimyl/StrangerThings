import React, {useState} from "react"

const Search = (props) => {
    const userPosts = props.userPosts
    const setSearchInput = props.setSearchInput

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div id= "searchBar"> 
        <input 
         type= "search"
        placeholder="search here"
        onChange= {handleChange} />
        </div>
    )
}




export default Search