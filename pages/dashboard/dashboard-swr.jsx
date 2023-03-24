import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch(`http://localhost:8000/dashboard`);
  const result = await response.json();
  return result;
};

export default function dashboard_swr() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "An error occured";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>SWR - stale white revalidate</h1>
      <h2>posts :- {data.posts}</h2>
      <h2>likes :- {data.likes}</h2>
      <h2>followers :- {data.followers}</h2>
      <h2>following :- {data.following}</h2>
    </div>
  );
}
