import React from "react";

export default function user({ users }) {
  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map((e, index) => {
          return (
            <li key={index}>
              {e.name}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
