import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchCommands = async () => {
    const response = await fetch("api/comment");
    const res = await response.json();
    setComments(res);
  };
  // ! Post req to the server
  const postComment = async () => {
    const response = await fetch("api/comment", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setComment("");
  };
  return (
    <div>
      <h1>CommentsPage</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={postComment}>Post Comment</button>
      <button onClick={fetchCommands}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <h5>
            {comment.id} &nbsp;
            {comment.text}
          </h5>
        );
      })}
    </div>
  );
}
