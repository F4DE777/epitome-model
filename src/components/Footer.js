import React from 'react';
import {Link} from "react-router-dom";
import SchLogo from '../assets/epitome-school-logo-bckgrnd-246x300.png'
import Twitter from "../assets/Group9.svg";
import Face from "../assets/Group10.svg";
import Insta from "../assets/Group233.svg";
import Mark from "../assets/Group1066.png";



import "./Footer.css";



function Footer() {
  return (
    <>

                
            <footer className="footer ">
                <div className="container-lg">
                    <div className="row">
                        <div className=" col-xl-4 col-md-4 col-sm-12 col-xs-12 mb-2 mb-lg-0 Army ">
                            <div className="container-lg useful1">
                            <span>
                                    <img src={SchLogo} alt="banner" />
                            </span>
                                <div className="carr-add">
                                    <p className="text-white text-small ">
                                            Off Sani Abacha Road,Old Karu Road <br /> Anguwar Ashimu, Mararaba <br /> Nasarawa State, Nigeria
                                    </p>
                                    <p className="text-white text-small ">
                                            TEL: +234 817 202 2402
                                    </p>
                                    <p className="text-white text-small ">
                                            emis.sch.org@gmail.com
                                    </p>
                                    <ul className='opening'>
                                        <li>OPENING HOURS</li>
                                        <li>Mo-Fr: 8:00-22:00 </li>
                                        <li>Sa: 8:00-24:00</li>
                                        <li>So: 8:00-14:00</li>
                                    </ul>
                                    
                                </div>

                            </div>

                        </div>


                        <div className=" col-xl-4 col-md-4 col-sm-12 col-xs-12  mt-4">
                            <div className="container-lg usefuls">
                                <div className="">
                                <header className="h5 text-white lined mb-4">USEFUL LINKS</header>
                                    <ul className="list-opp">
                                        <li >
                                            <Link to={'/'} className={'link'}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'} className={'link'}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Scholarships</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Apply</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Child Protection</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Alumni</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Admission List</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Payments</Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}
                                                  className={'link'}>Career</Link>
                                        </li>
                                    </ul>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className=" col-xl-4 col-md-4 col-sm-12 col-xs-12  mt-3 Army ">
                            <div className="container-lg  Gap">
                                <h6 className="use text-white">LETS KEEP YOU UP TO DATE <br /> WITH OUR LATEST NEWS. 
                                    
                                </h6>
                                <div className="controller-input">
                                    <input type="text"  placeholder="Your email here"
                                           className="form-controlling form" />
                                    <button className="submit px-2"  >  Submit  </button>
                                </div>
                                <div>
                                    <div className="socials">
                                        <header className="h5 text-white text-left lined ">Follow Us</header>
                                        <ul className="list-unstyled d-flex text-white mr-4 mb-4">
                                            <li className="  mr-4  dxty">
                                                <a href="#"
                                                    className={'link'} target={'_blank'}>
                                                    <img src={Face} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                            <li className="mr-4 dxty">
                                                <a href="#" className={'link'} target={'_blank'}>
                                                    <img src={Twitter} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                            <li className="mr-4 dxty">
                                                <a href="#"
                                                className={'link'} target={'_blank'}>
                                                    <img src={Insta} alt="social" className="img-fluid"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='w-mark'>
                                    <a href={'http://educare.school/'} target={'_blank'} style={{display: 'inline-block'}}>
                                        <img src={Mark} alt="Aisa" className="img-fluid">
                                        </img>
                                    </a>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <div className="divider">
                        <div className="container-lg">
                            <h4>Back to top</h4>
                        </div>
                    </div>
                    <div className="container-lg">
                        <div className="copyrights">
                            <div className=" ">
                                <p className=" mb-0 text-white fullyear">
                                    &copy; {new Date().getFullYear()} {''} Epitome Model Islamic Schools{' '}
                                </p>
                            </div>
                            <div className="policy">
                                <p>Contact Us</p>
                                <div className="divide"/>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
  )
}

export default Footer