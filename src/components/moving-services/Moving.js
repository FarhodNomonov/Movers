import React, { useRef, useState } from "react";
import MovingImg from "../../assets/images/personW.png";
import user from "../../assets/images/user.png";
import call from "../../assets/images/Calling.png";
function Moving() {
  const [userData, setUserData] = useState({
    first_name: "",
    phone: "",
  });
  const userRef = useRef(null);
  const callRef = useRef(null);
  const userIcon = () => {
    userRef.current.focus();
  };
  const callIcon = () => {
    callRef.current.focus();
  };
  const inputHandle = (e) => {
    setUserData(() => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="w-full h-80 md:h-max p-12 sm:min-w-[610px] relative bg-[#28438E]">
      <div className="max-w-[1536px] relative md:flex-col   mx-auto flex ">
        <div className="h-max w-[70%] md:w-full ">
          <h1 className="text-5xl w-full font-extrabold text-white text-bold">
            Рассчитаем стоимость услуг грузчиков в Москве
          </h1>
          <div className="flex gap-5  mt-4 md:flex-col">
            <div className="w-full relative">
              <input
                ref={userRef}
                name="first_name"
                type="text"
                id="first_name"
                onChange={inputHandle}
                className=" focus_inp  outline-0 py-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <label
                style={
                  userData.first_name.length > 0 ? { display: "none" } : null
                }
                onClick={userIcon}
                htmlFor="first_name"
                className="text-white flex hover:cursor-text  absolute top-[12px]  left-[12px] items-center"
              >
                <img src={user} className="w-[28px] h-[28px] mr-[4px]" alt="" />
                Ваше имя
              </label>
            </div>
            <div className="w-full relative">
              <input
                ref={callRef}
                type="text"
                name="phone"
                id="phone"
                onChange={inputHandle}
                className="focus_inp outline-0 py-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <label
                onClick={callIcon}
                htmlFor="phone"
                style={userData.phone.length > 0 ? { display: "none" } : null}
                className="text-white flex  hover:cursor-text  absolute top-[12px]  left-[12px] items-center "
              >
                <img src={call} className="w-[28px] h-[28px] mr-[4px]" alt="" />
                Телефон
              </label>
            </div>
            <button
              type="button"
              className="text-white font-medium text-[22px] py-[17px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.8 w-full p-2.5  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Заказать звонок
            </button>
          </div>
        </div>
        <div className="md:w-[135vw] md:hidden absolute top-[-24px] right-0 -mt-36">
          <img className="w-max" src={MovingImg} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Moving;
