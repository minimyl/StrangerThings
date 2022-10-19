import React, {useState, useEffect} from "react"
// import {returnedSearches} from '../api.js'


const Search = (props) => {
    const userPosts = props.userPosts
    const setSearchInput = props.setSearchInput

function addFilter(userPosts) {
    const filterPost = props.filterPost
    props.result(filterPost.filter((found) => found.title === filterPost.target.value))
    return filterPost.filter((filterPost) => filterPost.title === filterPost)[0]
}
    

    // useEffect(() => {
    //     const searchUseEffect = async () => {
    //       const returnedPosts= await returnedSearches()
    //       setUserInput(returnedPosts)
    //     }
    //     searchUseEffect()
    //   },[])

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
        </div>
    )
}




export default Search