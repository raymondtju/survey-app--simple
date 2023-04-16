export default async function getResults() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/results/api`);
    const data = await res.json();
    console.log(res);
    return data.data;
  } catch (error) {
    return null;
  }
  // const result = await fetch(`http://localhost:3000/api/hello`);
  // const data = await result.json();
  // console.log(data);
  // return data;
}
