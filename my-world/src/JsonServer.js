import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios'; 
function JsonServer() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3031/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <table className='fuck'>
        <thead>
        <tr>
            <th>
                Id
            </th>
            <th>
                Name
            </th>
        </tr>
        </thead>
        <tbody>
            {data.map((d, i)=> {
                return <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                </tr>

            })}
        </tbody>
            </table>
        </div>
    )
}

export default JsonServer;