import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../ContactsSection/ContactsSection.css";

export default function ContactsSection() {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <div className="contacts__content">
          <h2 className="contacts__title title">Контакти</h2>
          <p className="contacts__address">
            Ми знаходимося за адресою: <br /> вул. Соборності 61а, Poltava 36014
          </p>
         <a href="tel:+380661091999" className="contacts__number">
  <FontAwesomeIcon
    icon={faPhone}
    style={{ color: "#FFD43B", fontSize: "28px", marginRight: "8px" }}
  />
  тел. +38 066 109 19 99 (Viber/Telegram)
</a>
          <a
            href="https://www.facebook.com/smile.children.club"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#FFD43B", fontSize: "28px" }}
            />
            <div className="contacts__social">
              <span className="contacts__social-name">Facebook:</span>
              <span className="contacts__social-link">
                https://www.facebook.com/smile.children.club
              </span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/smilecpoltava"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FFD43B", fontSize: "28px" }}
            />
            <div className="contacts__social">
              <span className="contacts__social-name">Instagram:</span>
              <span className="contacts__social-link">
                https://www.instagram.com/smilecpoltava
              </span>
            </div>
          </a>
        </div>
        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.1665143352825!2d34.534810076350674!3d49.594609271441364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82ff01b4d46fd%3A0x49f9a165af906455!2sSmaylyk!5e0!3m2!1sru!2spl!4v1757881786928!5m2!1sru!2spl"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
