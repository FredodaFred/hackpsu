import { useLocation } from "react-router-dom";

const ClassReview = () => {
  const location = useLocation();
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>Class Review</h1>
        <h1>{`${location.state.subject} ${location.state.number}`}</h1>
      </div>
    </>
  );
};

export default ClassReview;
