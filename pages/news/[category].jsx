export default function FilterByCategory({ articles, category }) {
  return (
    <div>
      <h1>showing news for category {category}</h1>
      <h3>
        {articles.map((e) => {
          return (
            <p key={e.id}>
              {e.title} {e.description}
            </p>
          );
        })}
      </h3>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(query);
  //! cookies set and get using req and res
  res.setHeader("Set-Cookie", ["username=surya"]);

  // console.log(res.headers.cookie);
  const response = await fetch(
    `http://localhost:8000/news?category=${category}`
  );
  const result = await response.json();
  console.log("pre-rendering in news - category", category);

  return {
    props: {
      articles: result,
      category,
    },
  };
}
