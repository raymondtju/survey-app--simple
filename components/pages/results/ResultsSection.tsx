"use client";

import { SurveyData } from "@/app/results/page";

interface ResultsSectionProps {
  data: SurveyData[];
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ data }) => {
  return (
    <div className="w-full space-y-4">
      {data.map((item, id) => (
        <div key={id} className="px-4 py-2 border-2 border-black rounded-lg">
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
        </div>
      ))}
    </div>
  );
};

export default ResultsSection;
