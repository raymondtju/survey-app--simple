import axios from "axios";

export default async function getResults() {
  try {
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://survey-app-simple.vercel.app";
    const res = await axios.get(`${apiUrl}/results/api`);
    const data = await res.data;
    return data;
  } catch (error) {
    return null;
  }
}
