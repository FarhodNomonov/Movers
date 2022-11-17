import React from "react";
import Slider from "react-slick";
import UserPng from "../../assets/images/user (2).png";
import StarPng from "../../assets/images/Star 1.png";
import "../service/Service.css";

function MoveSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 2 : 1,
    slidesToScroll: 2,
  };

  return (
    <div className="max-w-[1536px] h-max  mx-auto p-6 moveSlider sm:min-w-[610px] ">
      <div className="wrapper_title ml-6">
        <h2 className="title_pages text-[#28438E] my-3  mb-4 text-bold text-base font-bold font-Inter">
          ОТЗЫВЫ О НАШИХ ГРУЗЧИКАХ
        </h2>
      </div>
      <div className="cardItem h-max  ">
        <Slider {...settings}>
          <div className="cardSlider">
            <div className="cardSlider__titte flex justify-start items-center">
              <div className="min-w-24  w-24 min-h-24  h-24">
                <img className="rounded-full" src={UserPng} alt="UserPng" />
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
              <div className="min-w-24  w-24 min-h-24  h-24">
                <img className="rounded-full" src={UserPng} alt="UserPng" />
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
              <div className="min-w-24  w-24 min-h-24  h-24">
                <img className="rounded-full" src={UserPng} alt="UserPng" />
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
              <div className="min-w-24  w-24 min-h-24  h-24">
                <img className="rounded-full" src={UserPng} alt="UserPng" />
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
