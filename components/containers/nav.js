import React from 'react'
import { useContext, useState } from "react"
import Link from 'next/link'
import styles from '../../styles/nav.module.css'
import {Router, useRouter} from 'next/router'
import { FaSignOutAlt } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { FaCartArrowDown } from "react-icons/fa"
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'
import {SearchContext} from './../../context/SearchContext'
import { MdBorderBottom } from 'react-icons/md'
function Navbar(){
    let iconStyles = { fontSize: "1.8em", marginLeft: "10px",marginRight: "10px",};
    const router = useRouter()
    const user=()=>{
        router.push("login")
    }
    const shop=()=>{
        router.push("shops")
    }
    const Favorite=()=>{
        router.push("Favorite")
    } 
    const about=()=>{
        router.push("about")
    }
    const contact=()=>{
        router.push("contact")
    }
    const Admin=()=>{
        router.push("admin/adminorderlist")
    }

    const {keySearchs,setKeySearchs} = React.useContext(SearchContext)
    console.log (keySearchs)
    const handleSearch = (e) => {
      console.log(e.target.value);
      setKeySearchs(e.target.value);
    }
   

    const clothes=()=>{
        router.push("clothes")
    }
    const shoe=()=>{
        router.push("shoe")
    }
    const bag=()=>{
        router.push("bag")
    }
    const cosmetic=()=>{
        router.push("cosmetic")
    }
    const home=()=>{
        router.push("home")
    }
    const watch=()=>{
        router.push("watch")
    }
    const books=()=>{
        router.push("books")
    }
    const admin=()=>{
        router.push("admin")
    }


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Next Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav m-auto p-3 s-2 navbar-light">
                        <li className="nav-item">
                            <a style={{cursor:'pointer', color: 'black'}} className="nav-link" aria-current="page" onClick={home}>Home</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a style={{color: 'black'}} className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" activeClassName onClick={clothes}>Clothes</a></li>
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" onClick={shoe}>Shoes</a></li>
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" onClick={books}>Books</a></li>
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" onClick={bag}>Bags</a></li>
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" onClick={cosmetic}>Cosmetics</a></li>
                            <li><a style={{cursor:'pointer', color: 'black'}} className="dropdown-item" onClick={watch}>Watches</a></li>
                        </ul>
                        </li>
                        <li>
                            <a style={{cursor: 'pointer', color: 'black'}} className="nav-link" aria-current="page" onClick={admin}>Admin</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor:'pointer', color: 'black'}} className="nav-link" aria-current="page" onClick={about}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor:'pointer', color: 'black'}} className="nav-link" aria-current="page" onClick={contact}>Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a style={{cursor:'pointer'}} className="nav-link" aria-current="page" onClick={Admin}>Admin</a>
                        </li>
                    </ul>
                    <form onChange ={handleSearch} style={{marginRight:20, marginTop:1}}>
                    <input class="form-control mr-sm-2 " type="search"  value={keySearchs} placeholder="Search product name"/>
                     </form>
                        <button className="btn btn-outline-success ml-6" type="submit">Search</button>
                    <button style=
                    {{height:50,width:60, border:"none",background:"none",marginTop:3,marginRight:0,}}><FaSignOutAlt style={iconStyles} onClick={user}/></button>
                    <br></br>
                    <button  style={{height:50,width:60, border:"none",background:"none",marginTop:3,marginRight:0}}><FaRegHeart style={iconStyles} onClick={Favorite}/></button>
                    <br></br>
                    <button style={{height:50,width:60, border:"none",background:"none",marginTop:3,marginRight:0}}><FaCartArrowDown style={iconStyles} onClick={shop}/></button>
                    </div>
                </div>
               
            </nav>

        </div>
    )
}
export default Navbar;