import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import useFetch from '../useFetch';
import search from "../images/search.png"
function Header() {
    const {data , isPending , error}=useFetch('http://localhost:3031/users');
    
    return (
        
        <header >
            <div className="home">
                {error && <div>{error}</div>}
                { isPending && <div> Loading...</div>}
            </div>
            <div className="header-top">
    <div className="container">
    <div className='header-top-in'>
        <a href="">Value at your desk. contact us →</a>
        <ul className="ul-help">
            <li><Link  >help desk</Link></li>
            <li> <Link >Emergency</Link></li>
            <li> <Link >Contact</Link></li>
        </ul>
        </div>
    </div>
    </div>
    <div className="header-btm">
        <div className="container">
            <nav className='navigator'>
            <div className="nav-left">
                <Link>
                < img src={logo} alt="" />
                </Link>
            </div>
            <div className="nav-right">
            {data?.map( (d, i) =>{
                return  <Link key={i}>
                    {d.name}
                    </Link>
                
            })}
                <button className='hed-btn'>
                    <img src={search} alt="" />
                </button>
            </div>
            </nav>
        </div>
    </div>
        </header>
    )
}

export default Header
