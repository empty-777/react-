import React from 'react'
import { useState } from 'react';
import Blockadarsh from './Blockadarsh';
const Blogs = () => {
    const [blog, setBlog] = useState([
        { name: 'adarsh', age: '34', from: 'ktm', id: 1 },
        { name: 'alen', age: '32', from: 'kollam', id: 2 },
        { name: 'ajay', age: '320', from: 'kannur', id: 3 }
    ]);
    const handleDelete= (id)=>{
        let newblog =blog.filter(blog => blog.id !== id );
        setBlog(newblog); 
    }
    return (
        <div className='blogs-of-adarshd'>
            <Blockadarsh blog={blog}  handleDelete={handleDelete}/>
            </div> 
    )
}
export default Blogs;