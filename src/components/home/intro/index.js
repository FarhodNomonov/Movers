import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <nav className="px-2 bg-white border-gray-200 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/">Цены</Link>
            </li>
            <li>
              <Link to="/">Услуги </Link>
            </li>
            <li>
              <Link to="/">Вопросы-ответы</Link>
            </li>
            <li>
              <Link to="/">Отзывы</Link>
            </li>
            <li>
              <Link to="/">О нас</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Intro;
