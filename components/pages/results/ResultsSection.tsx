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
          className="relative px-4 py-2 border-2 border-black rounded-lg"
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
            className="absolute px-2 py-1 text-sm text-white bg-red-500 rounded-lg top-2 right-2"
          >
            del
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;
