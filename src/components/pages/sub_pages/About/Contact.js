import React from 'react';
import Pex from "../../../../assets/Rectangle7.png";

import './Style.css'

function Contact() {
  return (
    <>
        <section>
            <div className="header-img">
                <img src={Pex} alt="Header" className="img-fluid" />
            </div>
        </section>


        <section className="container-md">
                <div className="comments">
                    <div className="intro">
                        <small>About </small>
                        <header>Contact Us</header>
                    </div>
                    <div className="row create">
                        <div className="col-12 move-down">
                            <div className="speech">
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Contact