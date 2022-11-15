import React from "react";
import { Tell, Time } from "../../assets/icon";
import logo from "../../assets/images/FooterLogo.png";

function Footer() {
  return (
    <div className="w-full p-[20px] bg-[#28438E]">
      <div className="md:container md:mx-auto  flex justify-between">
        <div className="w-1/3 text-[28px] flex text-white font-bold">
          <img src={logo} alt="" />
          <span className="ml-[20px]">ПоРаботаем!</span>
        </div>
        <div className="w-1/3">
          <p className="text-3xl font-[23px] flex text-white font-bold">
            Информация на данном сайте носит информационный характер и не
            является офертой.
          </p>
        </div>
        <div className="w-1/3 ml-[104px]">
          <div className="header_technical_support  items-center gap-14">
            <div className="header_connection flex items-center gap-3">
              <div className="header_connection_svg">
                <Tell />
              </div>
              <div className="header_connection_title">
                <p className="font-bold text-base text-white">ЗВОНИТЕ</p>
                <span className="text-[#FFCE45]">+78432126064</span>
              </div>
            </div>
            <div className="header_support flex items-center gap-3 mt-5">
              <div className="header_support_svg">
                <Time />
              </div>
              <div className="header_support_title">
                <p className="font-bold text-base text-white">МЫ РАБОТАЕМ</p>
                <p className="text-[#FFCE45]">КРУГЛОСУТОЧНО. БЕЗ ВЫХОДНЫХ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
