
export default function Footer(){
    return(
        <div>
            <div className="footer">
            <footer className=" text-center">
                {/* <!-- Grid container --> */}
                <div class="container p-4">
                    {/* <!--Grid row--> */}
                    <div class="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3">
                        <h5 className="text-case">Follow us</h5>

                        <ul className="list-unstyled mb-0">
                        <li>
                            <div className="social">
                                <a href="https://www.facebook.com/mrr.tou.77" class="fa fa-facebook"></a>
                                <a href="https://twitter.com/mengrothvitou" class="fa fa-twitter"></a>
                                <a href="https://www.instagram.com/txu_touu/" class="fa fa-instagram"></a>
                            </div>
                        </li>
                        <h5 className="text-contact">Contact us</h5>
                        <li>
                            <a href="tel:+855-11255574" className="tel">+855 112 555 74</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3">
                        <h5 className="text-case mb-0">Products</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!" className="text-light">Cosmetics</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Clothes</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Watches</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Shoes</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Books</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Bags</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
{/* 
                    <!--Grid column--> */}
                    <div className="col-lg-3">
                        <h5 className="text-case">Explore</h5>

                        <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-light">Home</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">About Us</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3">
                        <h5 className="text-case mb-0">Helps</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!" className="text-light">Shipping</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Delivery</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Payment & Orders</a>
                        </li>
                        <li>
                            <a href="#!" className="text-light">Size Guide</a>
                        </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                    <p className="Copyright">© 2021 Copyright:</p>
                    <a class="text-light" href="https://mdbootstrap.com/">Next Store</a>
                {/* <!-- Copyright --> */}
            </footer>
            </div>
        </div>
    )
}