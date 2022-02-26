import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [navs, setNavs] = useState("home");
    const [btnname,setbtnname]=useState("")
 useEffect(() => {
    const btnclicked=window.localStorage.getItem("btn")
    setbtnname(btnclicked)
 },[])
    return (
        <>
                       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <Link to={'/'}>
                        <li class={`nav-item ${navs === "home" ? "active" : null}`} onClick={() => setNavs("home")}>
                            <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>
                      
                        <Link to={'/profile'}> <li class={`nav-item ${navs === "profile" ? "active" : null}`}>
                            <a class="nav-link" >Profile</a>
                        </li></Link>



                    </ul>
                </div>
            </nav>
        <div className='text-center pt-5 mt-5'>  <h1>button {btnname} clicked</h1></div>
           
             
           
        </>
    )
}

export default Profile
