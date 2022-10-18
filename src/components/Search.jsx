import React, {useState} from "react"

const Search = (props) => {
    const userPosts = props.userPosts
    const setSearchInput = props.V


    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }
}




export default Search