import React, { useRef } from "react";
import { Line } from "../../assets/icon";
import BannerImg from "../../assets/images/banner-img.png";
import call from "../../assets/images/Call.png";

function Works() {
  const callRef = useRef(null);
  const userIcon = () => {
    callRef.current.focus();
  };
  return (
    <div className="container mx-auto bg__for__header">
      <div className="w-100 relative">
        <h1 className="absolute top-5 left-5  text-6xl font-bold text-white  ">
          ПоРаботаем!
        </h1>

        <div className="absolute top-[220px] flex left-[150px]">
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

        <div className=" top-[480px] left-[110px] absolute ">
          <div className="wrapper_title">
            <h2 className="title_pages text-[#28438E] my-3 mb-4 text-bold text-base font-bold font-Inter">
              ОСТАЛИСЬ ВОПРОСЫ?
            </h2>
          </div>
          <p className="w-[390px] text-[15px]">
            Закажите обратный звонок, диспетчер перезвонит вам в течении 5
            минут.
          </p>
          <div className="w-full relative">
            <input
              ref={callRef}
              type="text"
              className="focus_inp form-control block w-full px-3 py-4 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300  rounded-lg  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-[#0061CC] focus:outline-none "
              id="exampleText0"
            />

            <label
              onClick={userIcon}
              htmlFor=""
              className="text-[#0061CC] flex  hover:cursor-text  absolute top-[12px]  left-[12px] items-center "
            >
              <img src={call} className="w-[28px] h-[28px] mr-[4px]" alt="" />
              Телефон
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
