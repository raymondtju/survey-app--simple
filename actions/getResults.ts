export default async function getResults() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/results/api`, {
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // next: {
      //   revalidate: 1,
      // },
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
}
