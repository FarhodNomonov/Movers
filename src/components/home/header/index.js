import React from "react";
import { Tell, Time } from "../../../assets/icon";
import Logo from "../../../assets/images/Logo.png";

function Header() {
  return (
    <div className="header bg-[#28438E] flex items-center justify-between p-5">
      <div className="header_logo flex items-center ">
        <div className="logo_img">
          <img src={Logo} alt="..." />
        </div>
        <div className="header_logo_title p-5">
          <p className="font-bold text-base text-white">ПоРаботаем!</p>
          <p className="font-bold text-base text-white">
            Город<span className="text-[#FFCE45]">: Казань</span>
          </p>
        </div>
      </div>
      <div className="header_technical_support flex items-center gap-14">
        <div className="header_connection flex items-center gap-3">
          <div className="header_connection_svg">
            <Tell />
          </div>
          <div className="header_connection_title">
            <p className="font-bold text-base text-white">ЗВОНИТЕ</p>
            <span className="text-[#FFCE45]">+78432126064</span>
          </div>
        </div>
        <div className="header_support flex items-center gap-3">
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
  );
}

export default Header;
