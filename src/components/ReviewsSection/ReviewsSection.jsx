import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../ReviewsSection/ReviewsSection.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import ReviewsModal from "../ReviewsModal/ReviewsModal";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null); // 👈 текущий открытый отзыв

  function timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diff = now - past;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    const pluralize = (num, one, few, many) => {
      if (num % 10 === 1 && num % 100 !== 11) return `${num} ${one}`;
      if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100))
        return `${num} ${few}`;
      return `${num} ${many}`;
    };

    if (years > 0)
      return pluralize(years, "рік тому", "роки тому", "років тому");
    if (months > 0)
      return pluralize(months, "місяць тому", "місяці тому", "місяців тому");
    if (days > 0) return pluralize(days, "день тому", "дні тому", "днів тому");
    if (hours > 0)
      return pluralize(hours, "годину тому", "години тому", "годин тому");
    if (minutes > 0)
      return pluralize(minutes, "хвилину тому", "хвилини тому", "хвилин тому");
    return "зараз";
  }

  useEffect(() => {
    async function getRewiews() {
      try {
        const res = await fetch("http://localhost:5000/reviews");
        if (!res.ok) throw new Error("Помилка при завантаженні відгуків");
        const data = await res.json();
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setReviews(data);
      } catch (err) {
        console.error(err);
      }
    }
    getRewiews();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {isOpen && (
        <ReviewsModal
          setIsOpen={setIsOpen}
          reviews={reviews}
          setReviews={setReviews}
        />
      )}
      <section className="reviews">
        <div className="container reviews__container">
          <h2 className="reviews__title title">Відгуки</h2>
          <div className="reviews__slider-wrapper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".reviews__arrow-next",
                prevEl: ".reviews__arrow-prev",
              }}
              onRealIndexChange={() => setExpandedId(null)} // 👈 сбрасываем только при перелистывании
            >
              {reviews.map((review) => {
                const MAX_LENGTH = 250;
                const expanded = expandedId === review._id;
                const isLong = review.text.length > MAX_LENGTH;
                const text = expanded
                  ? review.text
                  : review.text.slice(0, MAX_LENGTH);

                return (
                  <SwiperSlide key={review._id}>
                    <div className="reviews__slide">
                      <h3 className="reviews__name">{review.name}</h3>
                      <span className="reviews__date">
                        {timeAgo(review.date)}
                      </span>
                      <div className="reviews__stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{ color: "#FFD43B" }}
                          />
                        ))}
                      </div>

                      <p className="reviews__text">
                        {text}
                        {isLong && !expanded && "..."}
                      </p>

                      {isLong && (
                        <button
                          className="reviews__more-btn"
                          onClick={() => toggleExpand(review._id)}
                        >
                          {expanded ? "Згорнути" : "Ще"}
                        </button>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* кастомные кнопки */}
           
              <button className="reviews__arrow reviews__arrow-prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="reviews__arrow reviews__arrow-next">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
        
          </div>

          <button className="reviews__button" onClick={() => setIsOpen(true)}>
            Додати відгук
          </button>
        </div>
      </section>
    </>
  );
}
