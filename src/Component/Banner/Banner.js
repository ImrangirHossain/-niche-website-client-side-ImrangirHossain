import React from 'react';
import banner1 from '../../images/banner-slider.jpg'
import banner2 from '../../images/banner-slider-2.jpg'
import banner3 from '../../images/banner-slider-3.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="slider-1 carousel-item active">
                <img height="450px" className="d-block w-100" src={banner1} alt="First slide"/>
                <div className="carousel-caption  text-start text-black d-block col-md-4 col-6">
                <h5 className="fs-5 fw-normal my-3" >The Maserati Series </h5>
                    <h1>A Great Addition</h1>
                    <p className="text-muted mb-2">A completely unique experience of luxury and an unmistakable style that emerges above all in the details, just as in its watches: the perfect way for you to keep time with elegance and determination.</p>
                    <Link to="/explore">
                         <button className="btn btn-outline-dark my-3 mb-5">Order Now</button>
                    </Link>

                </div>
                </div>
                <div className="slider-2 carousel-item">
                <img height="450px" className="d-block w-100" src={banner2} alt="Second slide"/>
                <div className="carousel-caption  text-start text-black d-block col-md-4 col-6">
                <h5 className="fs-5 fw-normal  my-3" >The Fossil Series</h5>
                    <h1>Black Great Addition</h1>
                    <p className="text-muted  mb-2"> Fossil watches are known for providing a good balance of affordable prices and quality components. They are often elegant and have clean designs that stand out compared to less expensive watches.</p>
                    <Link to="/explore">
                         <button className="btn btn-outline-dark my-3 mb-5">Order Now</button>
                    </Link>
                </div>
                </div>
                <div className="slider-3 carousel-item">
                <img height="450px" className="d-block w-100" src={banner3} alt="third slide"/>
                <div className="carousel-caption text-start text-black d-block col-md-4 col-6">
                    <h5 className="fs-5 fw-normal  my-3" >The Diesel Series</h5>
                    <h1>Leather Addition</h1>
                    <p className="text-muted  mb-2">Diesel general is any liquid fuel specifically designed for use in diesel engines, in which fuel ignition takes place, without any spark, as a result of compression of the inlet air mixture and then injection of fuel.</p>
                    <Link to="/explore">
                         <button className="btn btn-outline-dark my-3 mb-5">Order Now</button>
                    </Link>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;

