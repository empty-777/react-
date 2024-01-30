import React from 'react';
import bannerbck from '../images/banner_bck.png';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
function Banner() {
    const {data, error, isPending}= useFetch('http://localhost:3031/banner');
    return (
        <div className='banner' >
            <div className="home">
                {error && <div>{error}</div>}
                { isPending && <div> Loading...</div>}
            </div>
            <figure className='banner-bck'>
                <img src={bannerbck} alt="" className='w-100' />
            </figure>
            <div className="container">
                <div className="banner-wrapper">
            {data?.map((data, id) =>{
                return <span className='ourdoc' key={id}>{data.text1}</span>
            })}
    <div className="h1tag">
    {data?.map((data, id) =>{
                return <h1 key={id}>{data.h1}</h1>
            })}
    </div>
    {data?.map((data, id) =>{
                return <span className='childs' key={id}>{data.text2}</span>
            })}
        <div className="com_anchor">
        <Link>
            Make an appointments
            </Link>
        </div>
                </div>
            </div>
        </div>
    )
}
export default Banner
