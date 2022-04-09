import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { Component, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
        <p>Insert Slogan Here</p>
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
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Enter University
            </span>
            <input
              id="uni"
              type="text"
              class="form-control"
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
              class="form-control"
              placeholder="Course Subject"
            />
            <input
              ref={numberRef}
              id="number"
              type="text"
              class="form-control"
              placeholder="Course Number"
            />
          </div>
        </form>
        <button type="submit" onClick={submitHandler}>
          What's the tea?
        </button>
      </div>
    </>
  );
};

export default Landingpage;
