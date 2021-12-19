import React, {useEffect} from 'react'
//@ts-ignore
import {NavLink} from 'react-router-dom'

const BlogPost = () => {

const getPost = async () => {
    await fetch('http://192.168.0.45:555/api/').then(res=>res.json()).then(res=>console.log(res))
}
useEffect(() => {
    getPost()
},[])
    return (
        <>
            BLOG
            <br/>            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <NavLink to='/admin'>admin</NavLink>
        </>
    )
}

export default BlogPost;