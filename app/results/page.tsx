import React from "react";
import ResultsSection from "@/components/pages/results/ResultsSection";
import getResults from "@/actions/getResults";
import useResults from "@/actions/useResults";

export type SurveyData = {
  id: string;
  rating: number;
  recommendation: string;
  comment: string;
};

export const revalidate = 0;

export default async function Results() {
  const data = await getResults();

  return (
    <main className="items-center max-w-md min-h-screen px-4 pt-24 mx-auto overflow-hidden">
      <ResultsSection data={data} />
    </main>
  );
}
