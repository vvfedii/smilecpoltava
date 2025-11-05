import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../ReviewsModal/ReviewsModal.css";

export default function ReviewsModal({ setIsOpen,reviews, setReviews}) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const newReview = {
      name,
      rating,
      text: review,
      date: new Date().toISOString()
    };
    
    await fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
     console.log("Отправляю:", newReview);
    setIsOpen(false);
    setReviews([newReview, ...reviews])
  }

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__content">
        <h3 className="modal__title">Додати відгук</h3>
        <form className="review-form" action="" onSubmit={handleSubmit}>
          <input
            value={name}
            className="review-form__input"
            type="text"
            placeholder="Ім'я"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="review-form__stars">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  onClick={() => setRating(starValue)}
                  style={{
                    cursor: "pointer",
                    color: starValue <= rating ? "#FFD43B" : "#ccc",
                  }}
                  className={
                    starValue <= rating
                      ? "review-form__star review-form__star--active"
                      : "review-form__star review-form__star--inactive"
                  }
                />
              );
            })}
          </div>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="review-form__textarea"
            name=""
            id=""
            placeholder="
Поділіться своїми враженнями про це місце"
            required
          ></textarea>
          <div className="review-form__buttons">
            <button
              className="review-form__button review-form__button--cancel"
              onClick={() => setIsOpen(false)}
            >
              Скасувати
            </button>
            <button
              type="submit"
              className="review-form__button review-form__button--submit"
            >
              Опублікувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
