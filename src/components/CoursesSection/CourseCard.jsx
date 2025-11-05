import "../CoursesSection/CourseCard.css"
import { Link } from "react-router-dom";

export default function CourseCard({id, title, desc, icon}) {
    return (
       <article className="card">
        <img src={icon} alt="" />
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{desc}</p>
          <Link to={`/course/${id}`} className="card__more">Детальніше</Link>
        </div>
       </article>
    )
}