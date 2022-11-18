import React from "react";
import Mover from "../../assets/images/move.png";

function Move() {
  return (
    <div className="move max-w-[1536px] w-full mx-auto flex items-center justify-center gap-5 px-12 sm:px-4 sm:min-w-[85vw] py-12">
      <div className="w-[575px] flex justify-center items-center">
        <p className="text-2xl -mt-6 md:mt-0 text-[#28438E] md:text-xl sm:text-base font-bold ">
          Квартирные и офисные переезды и все виды погрузочно-разгрузочных работ
          за наличный/безналичный расчет. <span className="text-[#FFCE45]">Приедем за 50 минут </span>
        </p>
      </div>
      <div>
        <img src={Mover} alt="..." />
      </div>
    </div>
  );
}

export default Move;
