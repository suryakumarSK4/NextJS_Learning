import { comments } from "@/data/comments";

export default async function handler(req, res) {
  const { commentId } = req.query;
  //   ! get
  if (req.method === "GET") {
    const comment = comments.find((cmt) => cmt.id === parseInt(commentId));
    res.status(200).json(comment);
  }
  // ! delete
  else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = comments.findIndex((cmt) => cmt.id === parseInt(commentId));
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
  //   ! patch
  else if (req.method === "PATCH") {
    const patchComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const comment = req.body.comment;
    const index = comments.findIndex((cmt) => cmt.id === parseInt(commentId));
    comments[index].text = comment;
    console.log(index);
    res.status(200).json(patchComment);
  }
}
