const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());

export default fetcher;
