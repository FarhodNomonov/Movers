import React from "react";
import Mover from "../../assets/images/move.png";

function Move() {
  return (
    <div className="move flex justify-center gap-5 mt-[60px]">
      <div className="w-[575px] flex justify-center items-center">
        <p className="text-3xl text-[#28438E] font-bold">
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
