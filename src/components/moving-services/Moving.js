import React from "react";
import MovingImg from "../../assets/images/person.png";

function Moving() {
  return (
    <div className="w-full  bg-[#28438E]">
      <div className="md:container md:mx-auto flex p-12">
        <div className="w-9/12 ">
          <h1 className="text-[70px] w-full font-extrabold text-white text-bold">
            Рассчитаем стоимость услуг грузчиков в Москве
          </h1>
          <div className="flex gap-5 ">
            <input
              type="text"
              id="first_name"
              className="outline-0 py-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
            <input
              type="text"
              id="last_name"
              className="outline-0 py-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 w-full p-2.5  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Заказать звонок
            </button>
          </div>
        </div>
        <div className="moving_images mt-[-120px]">
          <img className="" src={MovingImg} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Moving;
