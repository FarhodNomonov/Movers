import React from "react";
import img1 from "../../assets/images/man2.png";
import img2 from "../../assets/images/man3.png";
import img3 from "../../assets/images/man4.png";
import img4 from "../../assets/images/manss.png";

const Cards = () => {
  return (
    <div>
      <div className="max-w-[1536px] w-full mx-auto">
        <div className="wrapper_title  ml-12">
          <h2 className="title_pages text-[#28438E] my-3 mb-4 text-bold text-base font-bold font-Inter">
            НАШИ УСЛУГИ
          </h2>
        </div>
        <div className=" flex flex-wrap  sm:w-full justify-around  mx-auto   ">
          <div className=" w-[300px]   mx-auto sm:w-[500px] smm:w-[300px] my-4 h-[253px] sm:h-[320px] flex rounded-[5px] relative p-8 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1 className="font-bold md:text-lg">ГРУЗЧИКИ</h1>
            <div className=" w-52 bg-blue-700 h-32 -skew-x-6 absolute left-10 top-24 sm:top-[100px] sm:left-[80px] sm:w-[350px] smm:left-8 smm:w-[220px] sm:h-[150px] top-20 rounded-[5px]">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 -top-6 smm:top-0 smm:left-12"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className=" w-[300px]   mx-auto sm:w-[500px] smm:w-[300px] my-4 h-[253px] sm:h-[320px] flex rounded-[5px] relative p-8 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1 className="font-bold md:text-lg">ФИЗИЧЕСКИМ ЛИЦАМ</h1>
            <div className=" w-52 bg-blue-700 h-32 -skew-x-6 absolute left-10 top-24 sm:top-[100px] sm:left-[80px] sm:w-[350px] smm:left-8 smm:w-[220px] sm:h-[150px] top-20 rounded-[5px]">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 sm:ml-20 smm:left-5 -top-6 sm:h-60"
                src={img1}
                alt=""
              />
            </div>
          </div>
          <div className="w-[300px]   mx-auto sm:w-[500px] smm:w-[300px] my-4 h-[253px] sm:h-[320px] flex rounded-[5px] relative p-8 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1 className="font-bold md:text-lg">ЮРИДИЧЕСКИМ ЛИЦАМ</h1>
            <div className=" w-52 bg-blue-700 h-32 -skew-x-6 absolute left-10 top-24 sm:top-[100px] sm:left-[80px] sm:w-[350px] smm:left-8 smm:w-[220px] sm:h-[150px] top-20 rounded-[5px]">
              <img
                className="skew-x-6 relative left-20 w-100 sm:ml-20 h-30 smm:left-5 -top-6 sm:h-60"
                src={img2}
                alt=""
              />
            </div>
          </div>
          <div className=" w-[300px]   mx-auto sm:w-[500px] smm:w-[300px] my-4 h-60 sm:h-[320px] flex rounded-[5px] relative p-8 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1 className="font-bold md:text-lg">АВТОПАРК</h1>
            <div className=" w-52 bg-blue-700 h-32 -skew-x-6 absolute left-10 top-24 sm:top-[100px] sm:left-[80px] sm:w-[350px] smm:left-8 smm:w-[220px] sm:h-[150px] top-20 rounded-[5px]">
              <img
                className="skew-x-6 relative left-10  w-100 h-30 -top-6 smm:top-5  smm:left-10"
                src={img3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
