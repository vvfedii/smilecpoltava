import "../HeroSection/HeroSection.css";
import boy from "../../images/child1.png";
import girl from "../../images/child2.png";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h2 className="hero__title">Дитячий клуб "СмайлИк" Полтава</h2>
          <p className="hero__text">
            Теплий простір для рохвитку творчості та дружби дітей 2 - 7р.
          </p>
          <button className="hero__btn btn">Записатися на пробне</button>
        </div>
        <div className="hero__img-box">
          <img className="hero__img" src={girl} alt="" />
          <img className="hero__img" src={boy} alt="" />
        </div>
      </div>
    </section>
  );
}
