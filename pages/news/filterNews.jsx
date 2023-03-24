import { useState } from "react";
import { useRouter } from "next/router";

export default function FilterNews({ eventList }) {
  const [news, setNews] = useState(eventList);
  const router = useRouter();

  // ! Filter elements by button click

  //! also this method not update the url endpoint so instead of using this
  //! we can also use another shallow routing method
  const Politics = async () => {
    const response = await fetch(
      `http://localhost:8000/news?category=politics`
    );
    const result = await response.json();
    setNews(result);

    router.push("filterNews?category=politics", undefined, {
      shallow: true,
    });
  };
  const Sports = async () => {
    const response = await fetch(`http://localhost:8000/news?category=sports`);
    const result = await response.json();
    setNews(result);
    router.push("filterNews?category=sports", undefined, {
      shallow: true,
    });
  };
  const Entertainment = async () => {
    const response = await fetch(
      `http://localhost:8000/news?category=entertainment`
    );
    const result = await response.json();
    setNews(result);
    router.push("filterNews?category=entertainment", undefined, {
      shallow: true,
    });
  };
  return (
    <div>
      <h1>List of Events</h1>
      <div className="d-flex p-3">
        <button className="p-3" onClick={Politics}>
          Politics News
        </button>
        <button className="p-3" onClick={Sports}>
          Sports News
        </button>
        <button className="p-3" onClick={Entertainment}>
          Entertainment News
        </button>
      </div>

      <h3>
        {news.map((e) => {
          return (
            <p key={e.id}>
              {e.id} {e.title} {e.description} {e.category}
            </p>
          );
        })}
      </h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const endpoint = category ? category : "";
  const response = await fetch(`http://localhost:8000/news?${endpoint}`);
  const result = await response.json();
  return {
    props: {
      eventList: result,
    },
  };
}
