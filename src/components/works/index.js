import React from "react";
import bgImg from "../../assets/images/Vector.png";
import bgImgRight from "../../assets/images/Vector (2).png";
import BannerImg from "../../assets/images/banner-img.png";
import BannerImg1 from "../../assets/images/Ellipse 425.png";
import { Phone } from "../../assets/svg";

function Works() {
  const backgroundImageStyle = {
    backgroundImage: `url("${bgImg}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "21.5vw",
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url("${bgImgRight}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    width: "100%",
    height: "704px",
  };

  return (
    <div className="works flex md:container md:mx-auto relative">
      <div className="text-white w-3/12" style={backgroundImageStyle}>
        <h1 className="text-5xl font-bold py-7 px-8 w-3/12 ">ПоРаботаем!</h1>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="text-white" style={backgroundImageStyle2}>
          <img
            src={BannerImg1}
            alt="BannerImg"
            className="cover right-1/4"
            style={{
              right: "-35%",
              width: "718px",
              height: "713px",
              borderRadius: "50%",
              position: "absolute",
              top: "-2%",
            }}
          />
        </div>
      </div>
      <div className="card flex justify-between">
        <div className="card_item">
          <div className="card_item__header">
            <img src={BannerImg} alt="BannerImg" />
          </div>
          <div className="card_item__body justify-center">
            <p>все виды погрузочно-разгрузочных работ</p>
            <a href="#">От 200 рублей</a>
          </div>
        </div>
        <div className="card_item">
          <div className="card_item__header">
            <img src={BannerImg} alt="BannerImg" />
          </div>
          <div className="card_item__body justify-center">
            <p>все виды погрузочно-разгрузочных работ</p>
            <a href="#">От 200 рублей</a>
          </div>
        </div>
        <div className="card_item">
          <div className="card_item__header">
            <img src={BannerImg} alt="BannerImg" />
          </div>
          <div className="card_item__body justify-center">
            <p>все виды погрузочно-разгрузочных работ</p>
            <a href="#">От 200 рублей</a>
          </div>
        </div>
      </div>
      <div className="faqs" style={{width: "30vw", border: "1px solid red", position:"absolute", top: "22vw", left: "4vw"}}>
        <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
        <p>Закажите обратный звонок, диспетчер перезвонит вам в течении 5 минут.</p>
          <button><Phone />Телефон</button>
      </div>
    </div>
  );
}

export default Works;
