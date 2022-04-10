import { useLocation } from "react-router-dom";

const ClassReview = () => {
  const location = useLocation();
  let subjectStr = String(location.state.subject);
  subjectStr = subjectStr.toUpperCase()
  console.log(subjectStr)

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>Class Review</h1>
        <h1>{`${ subjectStr } ${location.state.number}`}</h1>
      </div>
    </>
  );
};

export default ClassReview;
