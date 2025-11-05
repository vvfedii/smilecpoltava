import { courses } from "../../data/courses";
import "../CoursesSection/CoursesSection.css";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="courses__title title">Напрями</h2>

        <ul className="courses__list">
          {courses.map((course) => {
            return (
              <li key={course.id} className="courses__item">
                <CourseCard {...course} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
