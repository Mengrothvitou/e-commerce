import Link from 'next/link'
import styles from '../../styles/nav.module.css'
function Navbar(){
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
                        <a className="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item " href="/clothes">Clothes</a></li>
                            <li><a class="dropdown-item" href="/shoe">Shoes</a></li>
                            <li><a class="dropdown-item" href="/books">Books</a></li>
                            <li><a class="dropdown-item" href="/bag">Bags</a></li>
                            <li><a class="dropdown-item" href="/cosmetic">Cosmetics</a></li>
                            <li><a class="dropdown-item" href="/watch">Watches</a></li>
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
                    <a href="/login"><img src="signout.png" alt="sign" className="sign"></img></a>
                    <a href="#"><img src="shopping.png" class="cart"></img></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;