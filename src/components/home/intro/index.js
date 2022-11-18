import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <nav className="px-2 w-[95%] mx-auto bg-white border-gray-200 ">
      <div className="max-w-[1536px]  flex flex-wrap justify-between items-center mx-auto">
        <div className="  w-full  " id="navbar-multi-level">
          <ul className="flex    smm:flex-wrap  smm:justify-between     font-medium">
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]  ">
              <Link to="/">Главная</Link>
            </li>
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]">
              <Link to="/">Цены</Link>
            </li>
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]">
              <Link to="/">Услуги </Link>
            </li>
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]">
              <Link to="/">Вопросы-ответы</Link>
            </li>
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]">
              <Link to="/">Отзывы</Link>
            </li>
            <li className="p-5 smm:py-2 smm:px-3 hover:text-[#FFCE45] transition-all duration-[0.2s]">
              <Link to="/">О нас</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Intro;
