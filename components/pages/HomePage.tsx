"use client";

import React, { ReactEventHandler } from "react";

const HomePage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const data = {
      rating: form.rating.value,
      recommendation: form.recommendation.value,
      comment: form.comment.value,
    };

    await fetch(
      `${
        process.env.NODE_ENV == "development"
          ? "http://localhost:3000"
          : "https://survey-app-simple.vercel.app"
      }/api/submit`,
      {
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    alert("Thank you for your feedback!");
  };

  const RatingOption = ({ value }: { value: number }) => (
    <div>
      <input type="radio" name="rating" value={value} required />{" "}
      <label>{value}</label>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>How do you feel about our products/services?</label>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <RatingOption key={value} value={value} />
          ))}
        </div>

        <div>
          <label>Would you recommend us to your colleagues?</label>

          <div>
            <input type="radio" name="recommendation" value="true" required />{" "}
            <label>Yes</label>
          </div>

          <div>
            <input type="radio" name="recommendation" value="false" required />{" "}
            <label>No</label>
          </div>
        </div>

        <div>
          <label className="flex flex-1">
            Please share your thoughts... (Optional)
          </label>
          <textarea
            name="comment"
            placeholder="This is what I liked most/this is what you can improve..."
            className="w-full h-24 p-2 border-[1px] border-black rounded-lg"
          ></textarea>
        </div>

        <button
          className="px-2 py-1 text-sm rounded-lg bg-slate-900 text-slate-100"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
