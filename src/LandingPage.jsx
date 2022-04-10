import { useNavigate } from "react-router";
import { useRef } from "react";

const Landingpage = () => {
  return (
    <>
      <Title />
    </>
  );
};

const Title = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <h1>CourseGossip</h1>
        <p>Less time research um more time um coding</p>
        <SearchClass />
      </div>
    </>
  );
};

const SearchClass = () => {
  const navigate = useNavigate();

  const subjectRef = useRef(null);
  const numberRef = useRef(null);

  const submitHandler = () => {
    navigate("classreview/", {
      state: {
        subject: subjectRef.current.value,
        number: numberRef.current.value,
      },
    });
  };

  return (
    <>
      <div>
        <form className="d-flex flex-column align-items-center">
          <div
            className="input-group input-group-sm"
            style={{ marginTop: "5%" }}
          >
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Enter University
            </span>
            <input
              id="uni"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            ></input>
          </div>
          <span style={{ marginTop: "5%" }}>Enter Course Information</span>
          <div className="input-group mb-3 " style={{ marginTop: "5%" }}>
            <input
              ref={subjectRef}
              id="subject"
              type="text"
              className="form-control"
              placeholder="Course Subject"
            />
            <input
              ref={numberRef}
              id="number"
              type="text"
              className="form-control"
              placeholder="Course Number"
            />
          </div>
        </form>
        <div className="d-flex flex-column align-items-center">
          <button type="submit" onClick={submitHandler}>
            What's the tea?
          </button>
        </div>

      </div>
    </>
  );
};

export default Landingpage;
