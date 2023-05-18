import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container text-white text-lg-start text-md-start text-sm-center text-xs-center w-100">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div>
                            <h3>Logo</h3>
                            <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad</p>
                        </div>
                        <div>
                            <p>Email:1234@gmail.com</p>
                            <p>Mobile:1234567890</p>
                        </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
                        <div>
                            <h4>Quick Link</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Home</a>
                                </li>
                                <li>
                                    <a href="/form" className="text-decoration-none text-white">Form</a>
                                </li>
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Service</a>
                                </li>
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div>
                            <h4>Service</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Marketing</a>
                                </li>
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Branding</a>
                                </li>
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Web Design</a>
                                </li>
                                <li>
                                    <a href="/" className="text-decoration-none text-white">Graphics Design</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div>
                            <h4>Newsletter</h4>
                            <label htmlFor="Newsletter" className="form-label">Subscribe To Our Newsletter</label>
                            <div className="input-group mb-3 text-white w-md-100 rounded-4">
                                <input type="text" className="form-control" placeholder="Enter Your Email"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text bg-primary text-white" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-5">
                    <div className="col-xl-6 col-md-4 col-sm-12">
                        <p>© 2022 Company, Inc <a href="/" target="_blank" className="text-decoration-none text-bg-warning">Motivity</a></p>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="d-flex justify-content-center gap-4">
                            <i className="bi bi-facebook h2"></i>
                            <i className="bi bi-whatsapp h2"></i>
                            <i className="bi bi-github h2"></i>
                            <i className="bi bi-bootstrap h2"></i>
                            <i className="bi bi-linkedin h2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

