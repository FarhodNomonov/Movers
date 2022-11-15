import React from "react";
import Slider from "react-slick";
import UserPng from '../../assets/images/user (2).png';
import StarPng from '../../assets/images/Star 1.png';
import '../service/Service.css';

function MoveSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className="md:container md:mx-auto p-6 moveSlider">
      <div className="wrapper_title">
        <h2 className="title_pages text-[#28438E] text-bold text-base font-bold font-Inter">
          СТОИМОСТЬ УСЛУГ
        </h2>
      </div>
      {/* <div id="controls-carousel" className="relative" data-carousel="static"> */}
      <div className="cardItem h-[28rem]">
        <Slider {...settings}>
          <div className="cardSlider">
            <div className="cardSlider__titte flex justify-start items-center">
              <div className="cardSlider__img">
                <img src={UserPng} alt="UserPng" />
              </div>
              <div className="cardSlider__text">
                <p>Дмитрий Филимонов</p>
                <div className="stars flex justify-start items-center">
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                </div>
              </div>
            </div>
            <div className="cardSlider__deck">
              Дмитрий Филимонов Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </div>
          </div>
          <div className="cardSlider">
            <div className="cardSlider__titte flex justify-start items-center">
              <div className="cardSlider__img">
                <img src={UserPng} alt="UserPng" />
              </div>
              <div className="cardSlider__text">
                <p>Дмитрий Филимонов</p>
                <div className="stars flex justify-start items-center">
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                </div>
              </div>
            </div>
            <div className="cardSlider__deck">
              Дмитрий Филимонов Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </div>
          </div>
          <div className="cardSlider">
            <div className="cardSlider__titte flex justify-start items-center">
              <div className="cardSlider__img">
                <img src={UserPng} alt="UserPng" />
              </div>
              <div className="cardSlider__text">
                <p>Дмитрий Филимонов</p>
                <div className="stars flex justify-start items-center">
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                  <img src={StarPng} alt="StarPng" />
                </div>
              </div>
            </div>
            <div className="cardSlider__deck">
              Дмитрий Филимонов Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse{" "}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MoveSlider;
