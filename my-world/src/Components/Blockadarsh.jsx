import React from 'react'

const Blockadarsh=({blog, tittle, handleDelete})=> {
    return (
        <div className='blogs-of-adarsh'>
        {blog.map((blo) => (
            <div className="whole-wrap" key={blo.id}>
                <h1>this is a blog</h1>
                <h2>{tittle}</h2>
                <h2>my name is {blo.name}</h2>
                <p>I am {blo.age} years old</p>
                <h3>Iam form {blo.from}</h3>
                <p>{blo.name}</p>
                <button onClick={()=> handleDelete(blo.id)}>delete me</button>
            </div>
        ))}
    </div>
    )
}

export default Blockadarsh;