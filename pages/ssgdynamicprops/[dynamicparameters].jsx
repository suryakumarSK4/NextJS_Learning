import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
function Dynamicparameters({ posts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      dynamicparameters
      <h1>
        {posts.id} &nbsp;
        {posts.title}
      </h1>
      <p>{posts.body}</p>
      <br />
      <Link href={"/ssgdynamicprops"}>Go Back</Link>
    </div>
  );
}
export default Dynamicparameters;

export async function getStaticPaths() {
  // ! dynamic fetching paths for getstaticpaths
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const res = await response.json();
  // const paths = res.map((post) => {
  //   return {
  //     params: {
  //       dynamicparameters: `${post.id}`,
  //     },
  //   };
  // });
  // return {
  //   paths,
  //   fallback: false,
  // };

  // ? static method to fetch and create page for dynamic pages
  return {
    paths: [
      {
        params: { dynamicparameters: "1" },
      },
      {
        params: { dynamicparameters: "2" },
      },
      {
        params: { dynamicparameters: "3" },
      },
      {
        params: { dynamicparameters: "4" },
      },
    ],
    fallback: true,
  };
}
// !

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.dynamicparameters}`
  );
  const res = await response.json();

  // if the page is not within the limit we can set notfound:true,
  //  so this is shows the 404 page otherwise it will show the previous page
  if (!res.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: res },
  };
}
