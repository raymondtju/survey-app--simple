"use client";

import { useEffect, useState } from "react";
const ResultsPage = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    fetch("/api/results")
      .then((res) => res.json())
      .then((response) => setSurveyData(response.data));
  }, []);
  return (
    <div>
      {" "}
      {surveyData.map((data, id) => (
        <div key={id}>
          <p>
            <strong> Rating: </strong> {data.rating}{" "}
          </p>{" "}
          <p>
            <strong> Recommendation: </strong> {data.recommendation}{" "}
          </p>{" "}
          <p>
            <strong> Comment: </strong> {data.comment}{" "}
          </p>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default ResultsPage;
