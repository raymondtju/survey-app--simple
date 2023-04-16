import React from "react";
import ResultsSection from "@/components/pages/results/ResultsSection";

export type SurveyData = {
  rating: number;
  recommendation: string;
  comment: string;
};

async function Results() {
  const res = await fetch(
    `${
      process.env.NODE_ENV == "development" ? "http://localhost:3000" : ""
    }/results/api`,
    {
      cache: "no-cache",
    }
  );
  const json = await res.json();

  if (!json) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="items-center max-w-md min-h-screen px-4 pt-24 mx-auto overflow-hidden">
      <ResultsSection data={json.data} />
    </section>
  );
}

export default Results;
