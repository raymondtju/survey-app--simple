export default async function getResults() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/results/api`, {
      cache: "no-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
}
