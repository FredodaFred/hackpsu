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
        <div style={{marginTop:'5%'}}>
          <h1>Overall Course Description</h1>
          <p>CMPSC 465 is a data structures and algorithm course that teaches you the fundamentals of
            algorithm design and analysis
          </p>
          <h1>Professors Who Teach This Class</h1>
          <li>
            <div>
              <h1>Professor: David Koslicki</h1>
              <p>Sentiment Analysis: 3/5</p>
              <p>Most Helpful Review: </p>
              <p>I thought professor koslicki was a nice guy. He actually incredibly incompetent!</p>
              <p>Source/more reviews: https://ratemyprofessor/davidkoslicki</p>
              <p>Source/more reviews: https://reddit/pennstate/davidkoslickiforcmpsc465</p>
            </div>
          </li>
      </div>
    </div>

    </>
  );
};
const Title = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center " >
          <h1>CourseGossip</h1>
          <p>Less time research um more time um coding</p>
      </div>
    </>
  );
};
const ReviewComponent = () =>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  var profs = []
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
        profs = data.dummy.professors
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
    <div>
      hello
    </div>
    </>
  )
}

export default ClassReview;
