import React from "react";
// import bgImg from "../../assets/images/Vector.png";
// import bgImgRight from "../../assets/images/Vector (2).png";
// import BannerImg from "../../assets/images/banner-img.png";
// import BannerImg1 from "../../assets/images/Ellipse 425.png";
// import { Phone } from "../../assets/svg";

function Works() {
  return (
   <div className="container mx-auto bg__for__header">
      <div className="w-100 relative">
         <h1 className="absolute top-5 left-5  text-6xl font-bold text-white  ">ПоРаботаем!</h1>

         <div className="grid grid-cols-4 gap-4 absolute top-40 left-60">
            <div className="w-50 shadow shadow-2xl p-4">
              <h2>Salom</h2>
            </div>
         </div>
      </div>
   </div>
  );
}

export default Works;
