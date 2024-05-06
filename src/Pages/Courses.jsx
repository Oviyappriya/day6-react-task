import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "./data.json";
const Course = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const crs = data.find((crs) => crs.id == id);
  console.log(crs);

  return (
    <>
      {data.map((crs) => (
        <Link key={crs.id} to={`/course/${crs.id}`} style={{ margin: 16 }}>
          {<h3>{crs.name}</h3>}
          <img
            src={crs.image}
            style={{
              width: 400,
              height: 300,
              display: "flex",
              flexDirection: "row",
            }}
          />
        </Link>
      ))}
    </>
  );
};
export default Course;
