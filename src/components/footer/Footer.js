import React from "react";
import { Tell, Time } from "../../assets/icon";
import logo from "../../assets/images/FooterLogo.png";

function Footer() {
  return (
    <div className="w-full p-[20px] bg-[#28438E] sm:min-w-[610px]  ">
      <div className=" max-w-[1536px] mx-auto flex justify-around  md:flex-col md:justify-center">
        <div className="text-18 flex text-white font-bold md:items-center  md:w-full md:flex-col md:justify-center">
          <img src={logo} className="w-24 h-24  md:w-30 md:h-30" alt="" />
          <span className="pl-2 text-xl">ПоРаботаем!</span>
        </div>
        <div className="w-1/3 md:w-full">
          <p className="text-xl text-md flex pl-28 md:pl-0 md:py-6  text-white md:text-center font-bold">
            Информация на данном сайте носит информационный характер и не
            является офертой.
          </p>
        </div>
        <div className="md:w-full md:ml-0 md:pt-6 ml-[104px] ">
          <div className="header_technical_support flex flex-col">
            <div className="header_connection flex items-center  gap-3">
              <div className="header_connection_svg">
                <Tell />
              </div>
              <div className="header_connection_title">
                <p className="font-bold text-base text-white text-md">
                  ЗВОНИТЕ
                </p>
                <span className="text-[#FFCE45] text-md">+78432126064</span>
              </div>
            </div>
            <div className="header_support flex items-center gap-3 mt-5 md:mt-0">
              <div className="header_support_svg">
                <Time />
              </div>
              <div className="header_support_title">
                <p className="font-bold text-base text-white text-md">
                  МЫ РАБОТАЕМ
                </p>
                <p className="text-[#FFCE45] text-md">
                  КРУГЛОСУТОЧНО. БЕЗ ВЫХОДНЫХ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
