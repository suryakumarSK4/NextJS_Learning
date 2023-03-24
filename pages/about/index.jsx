import Link from "next/link";

function index() {
  return (
    <div>
      index page from about <br />
      <Link className="link" href={"/about/about"}>
        About
      </Link>
      <br />
      <Link className="link" href={"/"}>
        Home
      </Link>
    </div>
  );
}

export default index;
