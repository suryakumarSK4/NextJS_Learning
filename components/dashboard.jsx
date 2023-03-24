import React, { useEffect, useState } from "react";

export default function dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:8000/dashboard`);
      const result = await response.json();
      setData(result);
      console.log(result);
      setLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h2>posts :- {data.posts}</h2>
      <h2>likes :- {data.likes}</h2>
      <h2>followers :- {data.followers}</h2>
      <h2>following :- {data.following}</h2>
    </div>
  );
}
