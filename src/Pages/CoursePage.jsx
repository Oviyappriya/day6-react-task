import { useParams } from "react-router-dom";
import data from "./data.json";
import PropTypes from "prop-types";

const Course = (props) => {
  return (
    <div
      style={{
        border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position: "relative",
        margin: 8,
      }}
    >
      <img
        alt={props.name}
        style={{ height: "200px", width: "300px", objectFit: "contain" }}
        src={props.image}
      />
      <h3>{props.name}</h3>,<p>{props.description}</p>
    </div>
  );
};

Course.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <>
      <Course {...data.find((stu) => stu.id === parseInt(courseId))} />
    </>
  );
};

export default CoursePage;
