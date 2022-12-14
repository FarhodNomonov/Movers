import React, { useRef, useState } from "react";
import { Line } from "../../assets/icon";
import BannerImg from "../../assets/images/banner-img.png";
import call from "../../assets/images/Call.png";
import Slider from "react-slick";
function Works() {
  const [userData, setUserData] = useState({
    phone: "",
  });
  const callRef = useRef(null);
  const userIcon = () => {
    callRef.current.focus();
  };
  const inputHandle = (e) => {
    setUserData(() => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
  };

  return (
    <div className=" max-w-[1536px] smm:w-[100%]  mx-auto bg__for__header">
      <div className="w-100 relative">
        <h1 className="absolute top-5 left-5 md:text-4xl md:top-10 smm:top-5 text-6xl font-bold text-white  ">
          ПоРаботаем!
        </h1>

        <div className="absolute top-[220px] flex left-[150px] md:hidden">
          <div className=" gap-4 ml-[10px]  ">
            <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
              <img src={BannerImg} alt="" />
              <p className="font-medium my-[5px] px-[5px] text-[15px]">
                все виды погрузочно-разгрузочных работ
              </p>
              <Line />
              <p className="text-[#28438E] font-bold pb-[20px]">
                От 200 рублей
              </p>
            </div>
          </div>
          <div className=" gap-4 ml-[10px] ">
            <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
              <img src={BannerImg} alt="" />
              <p className="font-medium my-[5px] px-[5px] text-[15px]">
                все виды погрузочно-разгрузочных работ
              </p>
              <Line />
              <p className="text-[#28438E] font-bold pb-[20px]">
                От 200 рублей
              </p>
            </div>
          </div>
          <div className=" gap-4 ml-[10px] ">
            <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
              <img src={BannerImg} alt="" />
              <p className="font-medium my-[5px] px-[5px] text-[15px]">
                все виды погрузочно-разгрузочных работ
              </p>
              <Line />
              <p className="text-[#28438E] font-bold pb-[20px]">
                От 200 рублей
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-[200px] absolute hidden  md:block smm:ml-[25%] smm:pt-[180px]  pt-[220px] ml-[28%]">
          <Slider {...settings}>
            <div className=" gap-4 ml-[10px]">
              <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
                <img src={BannerImg} alt="" />
                <p className="font-medium my-[5px] px-[5px] text-[15px]">
                  все виды погрузочно-разгрузочных работ
                </p>
                <Line />
                <p className="text-[#28438E] font-bold pb-[20px]">
                  От 200 рублей
                </p>
              </div>
            </div>
            <div className=" gap-4 ml-[10px] ">
              <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
                <img src={BannerImg} alt="" />
                <p className="font-medium my-[5px] px-[5px] text-[15px]">
                  все виды погрузочно-разгрузочных работ
                </p>
                <Line />
                <p className="text-[#28438E] font-bold pb-[20px]">
                  От 200 рублей
                </p>
              </div>
            </div>
            <div className=" gap-4 ml-[10px] ">
              <div className="w-[166px] rounded-[10px]  shadow shadow-2xl text-center flex items-center flex-col">
                <img src={BannerImg} alt="" />
                <p className="font-medium my-[5px] px-[5px] text-[15px]">
                  все виды погрузочно-разгрузочных работ
                </p>
                <Line />
                <p className="text-[#28438E] font-bold pb-[20px]">
                  От 200 рублей
                </p>
              </div>
            </div>
          </Slider>
        </div>
        {/*  */}
        <div className=" top-[480px] left-[110px] smm:w-[90%] smm:mx-auto smm:items-center absolute  smm:left-[8%] justify-center smm:absolute ">
          <div className="wrapper_title">
            <h2 className="title_pages text-[#28438E] my-3 mb-4 text-bold text-base font-bold font-Inter">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
          </div>
          <p className="w-[390px] smm:w-full text-[15px]">
            Закажите обратный звонок, диспетчер перезвонит вам в течении 5
            минут.
          </p>
          <div className="w-full smm:w-[80%] relative mt-5 smm:min-w-[85vw] smm:mx-auto smm:justify-center smm:p-0 smm:pl-10">
            <input
              ref={callRef}
              type="text"
              name="phone"
              onChange={inputHandle}
              className="focus_inp form-control block w-full px-3 py-4 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300  rounded-lg  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-[#0061CC] focus:outline-none smm:w-[80%]"
            />
            <label
              onClick={userIcon}
              htmlFor=""
              style={userData.phone.length > 0 ? { display: "none" } : null}
              className="text-[#0061CC] flex  hover:cursor-text  absolute top-[12px] smm:left-[54px]  left-[12px] items-center smm:top-[16px] "
            >
              <img src={call} className="w-[28px] h-[28px] mr-[4px]" alt="" />
              Телефон
            </label>
            <button
              type="button"
              className="font-medium text-[22px] text-white mt-3 ml-6 py-[17px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.8 w-[340px] p-2.5  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 smm:w-[80%] smm:ml-auto"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
