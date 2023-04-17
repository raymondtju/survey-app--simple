"use client";

import useResults from "@/actions/useResults";
import { SurveyData } from "@/app/results/page";

interface ResultsSectionProps {
  data: SurveyData[];
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ data }) => {
  const { data: dataa, mutate } = useResults();
  console.log(dataa);
  if (!data)
    return (
      //nodata
      <div>
        <h1 className="text-2xl font-bold">No data</h1>
      </div>
    );
  return (
    <div className="w-full space-y-4">
      {dataa?.data?.map((item: SurveyData) => (
        <div
          key={item.id}
          className="relative px-5 py-3 rounded-xl bg-slate-100"
        >
          <p>
            <span className="font-bold"> Rating: </span> {item.rating}
          </p>
          <p>
            <span className="font-bold"> Recommendation: </span>{" "}
            {item.recommendation ? "Yes" : "No"}
          </p>
          <p className="whitespace-pre-line">
            <span className="font-bold"> Comment: </span> {item.comment}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              async function deleteSurvey() {
                await fetch(`/results/api`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id: item.id }),
                }).catch((err) => {
                  console.log(err);
                  alert("Error deleting survey");
                });
              }
              mutate();
              deleteSurvey();
            }}
            className="absolute p-0.5 text-sm font-bold text-red-400 border-2 border-red-400 rounded-3xl top-3 right-3"
          >
            D
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;
