import Link from 'next/link'
import styles from '../../styles/nav.module.css'
import {Router, useRouter} from 'next/router'
function Navbar(){
    let iconStyles = { fontSize: "1.8em", marginLeft: "10px",marginRight: "10px",};
    const router = useRouter()
    const onclick=()=>{
        router.push(`/login`)
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
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" activeClassName href="/clothes">Clothes</a></li>
                            <li><a className="dropdown-item" href="/shoe">Shoes</a></li>
                            <li><a className="dropdown-item" href="/books">Books</a></li>
                            <li><a className="dropdown-item" href="/bag">Bags</a></li>
                            <li><a className="dropdown-item" href="/cosmetic">Cosmetics</a></li>
                            <li><a className="dropdown-item" href="/watch">Watches</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <form className="d-flex ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                    <FaUserAlt style={iconStyles} onClick={onclick}/>
                    <br></br>
                    <FaRegHeart style={iconStyles}/>
                    <br></br>
                    <FaCartArrowDown style={iconStyles}/><p className={styles.status}>0</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
export default Navbar;