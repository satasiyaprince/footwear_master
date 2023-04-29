import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../Config';

const Login = () => {

    const onclickhandler = async () => {
        try {
            const data = await signInWithPopup(auth, provider)
            localStorage.setItem("login", JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-wrap-2">
                        <h3>Get In Touch</h3>
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="center-button form-group" >
                                        <img className='googlebutton' src='./images/google.png' onClick={onclickhandler} />
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" className="form-control" placeholder="Your email address" />
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Your password" />
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                            <p>Don't have an account? <a href='/register'>Singup</a></p>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="map" className="colorlib-map" />
                </div>
            </div>
        </div>
    );
};

export default Login;