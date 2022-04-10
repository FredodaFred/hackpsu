import { useLocation } from "react-router-dom";
import React, {useState, useEffect } from "react";

const ClassReview = () => {
  const location = useLocation();
  let subjectStr = String(location.state.subject);
  subjectStr = subjectStr.toUpperCase()
  //console.log(subjectStr)

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Title/>
        <h1>Class Review: {`${ subjectStr } ${location.state.number}`}</h1>
      </div>
      <ReviewComponent/>
    </>
  );
};
const Title = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center " >
          <h1>CourseGossip</h1>
          <p>Insert Slogan Here</p>
      </div>
    </>
  );
};
const ReviewComponent = () =>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data)
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return(
    <>
    {data.dummy}
    </>
  )
}

export default ClassReview;
