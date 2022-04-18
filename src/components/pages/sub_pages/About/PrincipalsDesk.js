import React from 'react';
import Teacher from "../../../../assets/Image6.png";
import Pex from "../../../../assets/Rectangle22@2x.png";

import './Style.css'

function PrincipalsDesk() {
  return (
    <>
        <div className="page-trans">
                <section>
                    <div className="header-img">
                        <img src={Pex} alt="Header" className="img-fluid" />
                    </div>
                </section>
                

                <section className="container-md">
                    <div className="comments">
                        <div className="intro">
                            <small>About </small>
                            <header>Principal’s Desk</header>
                        </div>
                        <div className="row create">
                            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 move-down teacher-img ">
                            <img  src={Teacher} alt="" />
                            </div>
                            <div className="col-lg-9 col-xl-9 col-md-9 col-sm-12 move-down">
                                <div className="speech">
                                <div>
                                    <p>EPITOME MODEL ISLAMIC SCHOOLS is a group of co-educational institutions established in year 2008. The aim is to prepare youth for the where issues of ethnicity, tribalism nepotism, etc will not have a place to make an attempt towards creating a country that will be crisis free, where the fear of God will guide the actions of our youth rather than the manipulation of some ungodly people in the society, are also part of the school programme.</p>
                                </div>
                                    <strong>Happiness and success are the two things that most parents put at
                                        the
                                        top of
                                        their wish list for their children. Here, we prioritise happiness. If
                                        our
                                        pupils
                                        – and our staff – are happy, success will follow.</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
 
        </div>
            
    </>
  )
}

export default PrincipalsDesk