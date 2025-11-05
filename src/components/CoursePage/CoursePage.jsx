import { courses } from "../../data/courses";
import "../CoursePage/CoursePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import boy from "../../images/child9.png";
import girl from "../../images/child4.png";

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  return (
    <section className="course">
      <div className="container course__container">
        <div className="course__content">
          <h1 className="course__title">{course.title}</h1>
          <p className="course__intro">{course.intro}</p>
          <h3 className="course__list-title">{course.listTitle}</h3>
          <ul className="course__list">
            {course.blocks.map((item, index) => (
              <li key={index} className="course__item">
                {item}
              </li>
            ))}
          </ul>
          <p className="course__outro">{course.outro}</p>
        </div>

        <div className="course__gallery">
          <h3 className="course__gallery-title">Галерея курсу</h3>
          <div className="course__slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // добавляем Autoplay сюда
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".course__arrow-next",
                prevEl: ".course__arrow-prev",
              }}
              pagination={{ clickable: true, el: ".course__pagination" }}
              autoplay={{
                delay: 3000, // задержка между слайдами (3 секунды)
                disableOnInteraction: false, // не отключать после ручного переключения
              }}
            >
              {course.gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="" className="course__img" />
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="course__arrow course__arrow-prev">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="course__arrow course__arrow-next">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

            <div className="course__pagination"></div>
          </div>

          <div className="course__img-box">
            <img src={girl} alt="" className="course__img" />
            <img src={boy} alt="" className="course__img" />
          </div>
          <div className="course__banner">
            <span>У разі питань телефонуйте</span>
            <a href="tel:+380661091999" className="course__number">
              +38 (066) 109 19 99
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
