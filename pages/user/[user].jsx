// ? new
// pages/[slug].js

import { useRouter } from "next/router";

function Post({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h1 className="p-3">{data.name}</h1>
      <h2 className="p-3">{data.email}</h2>
      <h3 className="p-3">{data.body}</h3>
    </div>
  );
}

export async function getStaticPaths() {
  // const res = await fetch(`http://localhost:8000/users`);
  // const posts = await res.json();

  // const paths = posts.map((post) => ({
  //   params: { user: post.id.toString() },
  // }));

  return {
    paths: [
      {
        params: { user: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:8000/users/${params.user}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Post;

// ! traditional methods
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// function App({ productId }) {
//   const router = useRouter();
//   const { user } = router.query;
//   const [data, setData] = useState(null);

//   const updateData = useCallback((newData) => {
//     setData(newData);
//   }, []);
//   console.log(data);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${user}`)
//       .then((response) => {
//         updateData(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, [user]);
//   return (
//     <>
//       <Head>
//         <title>user {user}</title>
//       </Head>
//       <div>
//         {data ? (
//           <>
//             <h3>{data.title}</h3>
//             <h4>{data.body}</h4>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

// ? new method for dynamic routing

// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";

// export default function app() {
//   const [data, setData] = useState(null);
//   const router = useRouter();
//   const { user } = router.query;

//   const updateData = useCallback((newData) => {
//     setData(newData);
//   }, []);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts/${user}`
//         );
//         updateData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, [user, updateData]);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return <ul>{data.title}</ul>;
// }
