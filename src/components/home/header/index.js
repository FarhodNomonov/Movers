import React from "react";
import { Tell, Time } from "../../../assets/icon";
import Logo from "../../../assets/images/Logo.png";

function Header() {
  return (
    <div className="header bg-[#28438E] min-w-[590px]  p-1">
      <div className="max-w-[1536px]  mx-auto w-[95%] flex items-center justify-between">
        <div className="header_logo flex items-center ">
          <div className=" md:min-w-[60px] md:max-w-[60px]">
            <img src={Logo} alt="..." />
          </div>
          <div className="header_logo_title p-5">
            <p className="font-bold text-base text-white   md:text-[12px]">
              ПоРаботаем!
            </p>
            <p className="font-bold text-base text-white md:text-[12px]">
              Город
              <span className="text-[#FFCE45] md:text-[12px]">: Казань</span>
            </p>
          </div>
        </div>
        <div className="header_technical_support flex items-center gap-14">
          <div className="header_connection flex items-center gap-3">
            <div className="header_connection_svg">
              <Tell />
            </div>
            <div className="header_connection_title">
              <p className="font-bold text-base text-white  md:text-[12px]">
                ЗВОНИТЕ
              </p>
              <span className="text-[#FFCE45] md:text-[12px]">
                +78432126064
              </span>
            </div>
          </div>
          <div className="header_support flex items-center gap-3">
            <div className="header_support_svg">
              <Time />
            </div>
            <div className="header_support_title">
              <p className="font-bold text-base text-white md:text-[12px]">
                МЫ РАБОТАЕМ
              </p>
              <p className="text-[#FFCE45] md:text-[12px]">
                КРУГЛОСУТОЧНО. БЕЗ ВЫХОДНЫХ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
