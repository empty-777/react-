import React from "react";
import logo from '../image/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Banner";
import useFetch from "../useFetch";


const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:3031/users');
    return (<div>
        <header className="header"> ---
        {error && <div className="error">{error}</div>}
        {isPending && <div>Loading...</div>} 
            <div className="container"> 
                <nav className="navbar navbar-expand-lg navbar-light">

                    <a className="navbar-brand" ><img src={logo} alt="" /></a>
                    <button className="navbar-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    
                            <div className="navbar-nav">
                            {data.map((d, i) => {
                            return <a className="nav-link " key={i} href={d.name}>{d.name}</a>
                        })}
                            </div>
                    
                    </div>
                </nav>
            </div>
        </header>
    <Banner/>
    </div>
    );
}
export default Home;