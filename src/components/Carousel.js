import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Mortar from "../assets/Rectangle70.png";
import Team from "../assets/Rectangle72.png";
import Parade from "../assets/Rectangle71.png";



import "./Carousel.css";


function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay:true,
        };
  return (
    <>
      

    <div className='mt-5 mb-3'>
      <div className="gallery-head">
                <h1>News and Updates</h1>
                  <hr/>
              </div>
      </div>
     <div className="mb-5 mt-5">
        <Slider {...settings}>
          <div >
                    <div className="content-coner">
                        <div className="faded-img">
                            <img src={Parade} alt="something" style={{height:'500px',display:'grid',width:'100%',opacity: '0.4',marginTop:'5rem'}} className="img-fluid" />
                        </div>
                        <div className='hero-img'>
                          <img src={Mortar} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>2 February 2021</label>
                              <h1>Carousel Day</h1>
                              <p>Illo quo sint sed et voluptates. Molestiae tempora ut omnis ipsum quia quia rem laudantium. Itaque quidem facere.</p>
                              <h6 className="text-white" >Read more</h6>
                          </div>
                            <div className='view-more'>
                                <h5>View more news <i className="fal fa-long-arrow-right"   ></i></h5>
                            </div>
                        </div>
                    </div>
                    
          </div>
          <div >
              <div className="content-coner">
                        <div className="faded-img">
                            <img src={Team} alt="something" style={{height:'500px',display:'grid',width:'100%',opacity: '0.4',marginTop:'5rem'}} className="img-fluid" />
                        </div>
                        <div className='hero-img'>
                          <img src={Parade} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>15 FEBRUARY 2021</label>
                              <h1>Nativity Evening</h1>
                              <p>Dut qui officia Dolorem ut rerum nisi aut nemo laboriosam. Sed accusamus molestiae in rerum ut in et. Aut omnis necessitatibus nostrum omnis fuga vel totam dolore eveniet.</p>
                              <h6 className="text-white" >Read more</h6>
                          </div>
                            <div className='view-more'>
                                <h5>View more news <i className="fal fa-long-arrow-right"   ></i></h5>
                            </div>
                        </div>
              </div>
          </div>
          <div >
                    <div className="content-coner">
                        <div className="faded-img">
                            <img src={Mortar} alt="something" style={{height:'500px',display:'grid',width:'100%',opacity: '0.4',marginTop:'5rem'}} className="img-fluid" />
                        </div>
                        <div className='hero-img'>
                          <img src={Team} alt="something" className="img-fluid "  />
                        </div>
                        <div className="contents-slide">
                          <div className='date-event'>
                              <label>27 FEBRUARY 2021</label>
                              <h1>Covid awareness talk</h1>
                              <p>Illo quo sint sed et voluptates. Molestiae tempora ut omnis ipsum quia quia rem laudantium. Itaque quidem facere.</p>
                              <h6 className="text-white" >Read more</h6>
                          </div>
                            <div className='view-more'>
                                <h5>View more news <i className="fal fa-long-arrow-right"   ></i></h5>
                            </div>
                        </div>
                    </div>
          </div>
        
        </Slider>
      </div>
    
    
    </>
  )
}

export default Carousel