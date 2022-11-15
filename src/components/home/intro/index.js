import React from "react";

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
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
            <li>
              <a href="#">Услуги </a>
            </li>
            <li>
              <a href="#">Вопросы-ответы</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>

            <li>
              <a href="#">О нас</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Intro;
