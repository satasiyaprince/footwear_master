import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../Config';

const Register = () => {

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
                                    <div className="form-group">
                                        <label htmlFor="fname">Name</label>
                                        <input type="text" id="fname" className="form-control" placeholder="Your name" />
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
                            <p>Already have an account? <a href='/login'>Login</a></p>
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

export default Register;