import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () =>     {
    return (
        <div>
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><a href="index.html">Footwear</a></div>
                            </div>
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group">
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search" /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                                    <li className="active"><Link exact to={"/"}>Home</Link></li>
                                    <li className="has-dropdown">
                                        <Link to={"/men"}>Men</Link>
                                        <ul className="dropdown">
                                            <li><a href="product-detail.html">Product Detail</a></li>
                                            <li><Link to={"/cart"}>Shopping Cart</Link></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="order-complete.html">Order Complete</a></li>
                                            <li><a href="add-to-wishlist.html">Wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to={"/women"}>Women</Link></li>
                                    <li><Link to={"/about"}>About</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                    <li><Link to={"/appoinment"}>Appoinment</Link></li>
                                    <li className="cart"><Link to={"/cart"}><i className="icon-shopping-cart" /> Cart [0]</Link></li>
                                    <li className="cart"><Link to={"/login"}>Login&Signup</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center">
                                <div className="row">
                                    <div className="owl-carousel2">
                                        <div className="item">
                                            <div className="col">
                                                <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col">
                                                <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;