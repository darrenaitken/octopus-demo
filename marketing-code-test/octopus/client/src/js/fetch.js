// Function returns query results from GraphQL endpoint
export default function fetchData(endPoint, query) {
  return fetch(endPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then((res) => {
      // Only catches if network error - not 404 etc
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json(); // All good - return the GraphQL data
    })
    .then((data) => data.data);
}
