import React from "react";
import ResultsSection from "@/components/pages/results/ResultsSection";
import getResults from "@/actions/getResults";

export type SurveyData = {
  rating: number;
  recommendation: string;
  comment: string;
};

export default async function Results() {
  const data = await getResults();

  return (
    <main className="items-center max-w-md min-h-screen px-4 pt-24 mx-auto overflow-hidden">
      <ResultsSection data={data.data} />
    </main>
  );
}
