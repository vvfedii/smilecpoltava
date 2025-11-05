import boy2 from "../../images/child7.png";
import girl from "../../images/child3.png";
import "../AboutSection/AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title title">Про нас</h2>
        <div className="about__content">
          <div className="about__club">
            <h3 className="about__club-title">Детальніше про наш клуб</h3>
            <p className="about__club-text">
              Ми створили всі умови для гармонійного розвитку дитини і розкриття
              його здібностей. Продуманий затишний дизайн і обладнання нашого
              клубу, сучасна навчальна програма, індивідуальний підхід до кожної
              дитини, радість відкриттів, творчості та зростання - це усе про
              наш клуб. Наша команда методистів і викладачів розробила
              захоплюючі, яскраві авторські курси для того, щоб розкрити всі
              грані особистості наших маленьких вихованців. Наші педагоги - це
              досвідчені, добрі і уважні професіонали, які вміють працювати з
              дітьми.
            </p>
            
            <div className="about__banner">
              <div className="about__banner-box">
                 <img
                src={girl}
                alt=""
                className="about__banner-img"
              />
              
              <img
                src={boy2}
                alt=""
                className="about__banner-img"
              />
              
              </div>
              <p className="about__banner-text">
                Приходьте і ми зробимо так, щоб вам було комфортно, затишно і цікаво у нас.
              </p>
            </div>
          </div>
          <div className="about__methods">
            <h3 className="about__methods-title">
              Чим унікальні наші методики?
            </h3>
            <ul className="about__methods-list">
              <li className="about__methods-item">
                <span className="about__methods-num">1</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Результативність</h4>
                  <p className="about__methods-text">
                    Батьки дуже швидко бачать успіхи і досягнення своїх дітей.
                    Результативність досягається максимальним урахуванням
                    принципів індивідуальності і самостійності.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">2</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Креативність</h4>
                  <p className="about__methods-text">
                    У багатьох закдалах ви не знайдете курси, які пропонує наш
                    клуб. Це «Етикет», «Цікава географія», «Школа уваги»,
                    «Каліграфія пером», «Фінансова грамотність» і т.д.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">3</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Унікальність</h4>
                  <p className="about__methods-text">
                    Багато матеріалів і посібників були спеціально створеними
                    для занять у нашому клубі.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">4</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Предметність</h4>
                  <p className="about__methods-text">
                    Практично з кожного заняття діти забирають із собою робочий
                    лист, на якому видно результати діяльності на занятті. При
                    виконанні кожного завдання в клубі, кожна дитина обов'язково
                    має свій екземпляр для роботи.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">5</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Професійність</h4>
                  <p className="about__methods-text">
                    Всі заняття написані високопрофесійними педагогами і
                    психологами. Заняття завжди враховують вікові особливості
                    дітей, побудовані цікаво і захоплююче.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">6</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Різнобічність</h4>
                  <p className="about__methods-text">
                    Всі курси побудовані таким чином, щоб на заняттях
                    здійснювався всебічний розвиток дитини. Наше завдання - це
                    не тільки передати знання і вміння малюкам, а й навчити їх
                    самостійно думати, творчо проявляти себе. Саме тому велика
                    увага приділяється розвитку творчості та психічних процесів.
                  </p>
                </div>
              </li>
              <li className="about__methods-item">
                <span className="about__methods-num">7</span>
                <div className="about__methods-content">
                  <h4 className="about__methods-subtitle">Сучасність</h4>
                  <p className="about__methods-text">
                    Методики побудовані таким чином, що розвивають в дитині не
                    тільки ті якості, які потрібні сучасній людині, але і ті
                    здібності, які будуть потрібні йому через 20 років, коли він
                    стане дорослою людиною.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
