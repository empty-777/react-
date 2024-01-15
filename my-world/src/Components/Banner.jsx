import React from 'react'
import useFetch from '../useFetch'

const Banner = () => {
const { data, isPending, error} = useFetch('http://localhost:3031/banner-content1');
    
    return (<section className='banner'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data.map((d, i) => {
            return <div className="ban">

                <img key={i} alt="not found" />
            </div>

        })}

        <div className="container">
            <div className="banner-wrap">
                {data.map((d, i) => {
                    return <div className="banner-data">
                        <h1 key={i}>{d.text}</h1>
                    <span>{d.text4}</span>
                    <a href="#">{d.button}</a>
                    </div>

                })}
            </div>
        </div>
    </section>
    )
}

export default Banner;