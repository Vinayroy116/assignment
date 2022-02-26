import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile';


const Home = (props) => {
    const [navs, setNavs] = useState("home");
    
    function btnclicked (btn){
        console.log(btn)
       window.localStorage.setItem("btn",btn)
        }
    

    return (
    
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class={`nav-item ${navs === "home" ? "active" : null}`} onClick={() => setNavs("home")}>
                            <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                        </li>
                        <Link to={'/profile'}> <li class={`nav-item ${navs === "profile" ? "active" : null}`}>
                            <a class="nav-link" >Profile</a>
                        </li></Link>



                    </ul>
                </div>
            </nav>
            <center>
                <input type="radio" onClick={()=>btnclicked(1)}/><br/>
                <input type="radio" onClick={()=>btnclicked(2)}/><br/>
                <input type="radio" onClick={()=>btnclicked(3)}/><br/>
            </center>

        </>
        
    )
}



export default Home;

