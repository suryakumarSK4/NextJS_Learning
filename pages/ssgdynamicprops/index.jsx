import Link from "next/link";
export default function index({ posts }) {
  // console.log(posts);

  return (
    <div>
      <h1>SSG dynamicprops</h1>
      <ol>
        {posts.map((e, index) => {
          return (
            <>
              {/* <Link
                key={index}
                className="link"
                href={`ssgdynamicprops/${e.id}`}
              > */}
              <li key={e.id}>{e.title}</li>
              {/* </Link> */}
              <hr />
            </>
          );
        })}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await response.json();
  console.log(res);
  return {
    props: {
      posts: res.slice(0, 3),
    },
  };
}
