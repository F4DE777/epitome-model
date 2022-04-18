import React from 'react';
import Carousel from 'react-elastic-carousel'
import Item from "./Item";
import Robo from "../assets/Rectangle8493.png";
import Phase1 from "../assets/Rectangle88493.png";
import Phase2 from "../assets/Rectangle84933.png";
import Phase3 from "../assets/Rectangle84.png";

import "./Vision.css";


function Vision() {
  return (
    <>
    <div className='vision-cont'>
      <Carousel itemsToShow={1}>
          <Item>
                <div className="cov-div">
                    <div className="sep-div">
                    <div className="vis-tab">
                                <h1>Our Vision</h1>
                                <h1> Our Mission</h1>
                            </div>
                        <div className="vision">
                            
                                <p>The end of Kilimanjaro International
                                     Leadership Academy is to devote itself
                                      to the work of the intellectual, moral 
                                      and religious formation of girls and boys 
                                      of all religious faiths, tribes and socio 
                                      economic backgrounds to be leaders in service
                                       of God and others. The Kilimanjaro International 
                                       Leadership Academy community is one of shared commitment
                                        to the formation of women and men for and with others, who 
                                        are compassionate towards their neighbour, committed to doing 
                                        justice, competent in their academic pursuits and steadfast in 
                                        their reverence for God and all of God’s creation. The Kilimanjaro 
                                        International Leadership Academy community is committed to the
                                         Tanzanian policy On education and strives to
                                          form faith-directed persons who are inspired
                                           to imitate...
                                </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <img src={Robo} alt=" any" className='img-fluid' />
                        </div>
                </div>
          </Item>
          <Item>
                <div className="cov-div">
                    <div className="sep-div">
                    <div className="vis-tab">
                                <h1>Our Vision</h1>
                                <h1> Community Sh……</h1>
                            </div>
                        <div className="vision">
                            
                                <p>Our vision is to raise the next 
                                    generation of leaders who are guided by truth, 
                                    discipline, godly principles, hard work, love, 
                                    compassion, and selfless service. We are passionately 
                                    pursuing our vision through sharpening and finetuning
                                     a learning and skill system in art, science,
                                      and leadership.
                                </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <img src={Phase1} alt=" any" className='img-fluid' />
                        </div>
                </div>
          </Item>
          <Item>
                <div className="cov-div">
                    <div className="sep-div">
                    <div className="vis-tab">
                                <h1>Community of shared vision</h1>
                                <h1> Cura Personalis</h1>
                            </div>
                        <div className="vision">
                            
                                <p>The Kilimanjaro International Leadership Academy is a 
                                    community of shared vision, trained and working together 
                                    with this common purpose. Open to students and staff of all 
                                    religions, all economic levels and all tribal and regional 
                                    origins, the College encourages the model of a unified family, 
                                    and strives to develop individual talents and gifts within that 
                                    family, with deep respect for the traditional values of Tanzania.
                                     One of the specific contributions of educators is that they are
                                      oriented to certain values.Kilimanjaro and their colleagues at
                                       Kilimanjaro International Leadership Academy pledge themselves 
                                       to the moral development of their students. Development of religious
                                        principles and moral values is central to the curriculum, not just 
                                        in religion courses, retreats and religious services.
                                </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <img src={Phase2} alt=" any" className='img-fluid' />
                        </div>
                </div>
          </Item>
          <Item>
                <div className="cov-div">
                    <div className="sep-div">
                    <div className="vis-tab">
                                <h1>Cura Personalis</h1>
                                <h1> Our Vision</h1>
                            </div>
                        <div className="vision">
                            
                                <p>Personal care and concern is the hallmark of Jesuit 
                                    education. For such a relationship of authenticity and 
                                    truth to flourish between teacher and student, mutual trust
                                     and respect that grows out of a continuing experience of the 
                                     other as a genuine companion in
                                </p>
                            </div>
                        </div>
                        <div className="sec-div">
                            <img src={Phase3} alt=" any" className='img-fluid' />
                        </div>
                </div>
          </Item>
          
      </Carousel>
      </div>
    
    </>
  )
}

export default Vision