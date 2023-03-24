import Link from "next/link";
export default function index({ news }) {
  return (
    <div>
      <h2>news page for SERVER SIDE RENDERING</h2>
      <h3>
        <Link href={"news/filterNews"}>Filter news by category</Link>
      </h3>
      {news.map((e) => {
        return (
          <p key={e.id}>
            <b>{e.id}</b> {e.title} {e.description} {e.category}
          </p>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:8000/news");
  const result = await response.json();
  console.log("pre-rendering in news");
  return {
    props: {
      news: result,
    },
  };
}
