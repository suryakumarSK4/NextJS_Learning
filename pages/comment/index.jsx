import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  // ! Fetch data from api server
  const fetchComments = async () => {
    const response = await fetch("api/comment");
    const res = await response.json();
    setComments(res);
  };
  // ! Post data from api server
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
  // ! Patch data from api server
  const patchComment = async (cmtId, cmtText) => {
    const response = await fetch("api/comment", {
      method: "PATCH",
      body: JSON.stringify({ id: cmtId, text: cmtText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setComment("");
  };
  // ! Delete data from api server
  const deleteComment = async (cmtId) => {
    const response = await fetch(`api/comment/${cmtId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    fetchComments();
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
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <h5 key={comment.id}>
            {comment.id} &nbsp;
            {comment.text}&nbsp;
            <button onClick={() => deleteComment(comment.id)}>
              Delete
            </button>{" "}
            &nbsp;
            <button onClick={() => patchComment(comment.id, comment)}>
              Patch Comment
            </button>
          </h5>
        );
      })}
    </div>
  );
}
