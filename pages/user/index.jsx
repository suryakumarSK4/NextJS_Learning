import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Users from "../../components/user-details";
function index({ users }) {
  // const obj = [
  //   { id: 1, name: "surya" },
  //   { id: 2, name: "kumar" },
  // ];

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <Users users={obj} /> */}

      <h1>Users</h1>
      {users.map((e) => {
        return (
          <>
            <div className="d-flex">
              {/* <li className="p-3" key={e.id}>
              <Link href={`/user/${e.id}`}>{e.id}</Link>
              <br />
              </li> */}
              <h3 className="p-3">{e.id}</h3>
              <p className="p-3" key={e.id}>
                <span>{e.name}</span>
                <span> {e.email}</span>
              </p>
              <p className="p-3">{e.body}</p>
            </div>
            <hr />
          </>
        );
      })}
      <br />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/users");
  const result = await response.json();
  return {
    props: {
      users: result,
    },
  };
}
