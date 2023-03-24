import { useRouter } from "next/router";

export default function CatchRoutes() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return (
    <div>
      <h1>
        All routes catch concept now the page is in{" "}
        <b>
          <i style={{ color: "red" }}>
            {params ? params[params.length - 1] : ""}
          </i>
        </b>
      </h1>
      <span>if i use any endpoint start with allroutes/</span>
      <br />
      <span>
        after that all the pages shows this page also this is the root of all
        the pages
        <i>
          <b>&nbsp;allroutes/catchRoutes &nbsp;</b>
        </i>
        next upcoming endpoints
      </span>
      <br />
      <span>
        for example{" "}
        <b>
          <i>http://localhost:3000/allroutes/</i>
          /2/dfd/s/f/a/df/aree/d/a/dfdfa
        </b>{" "}
      </span>
    </div>
  );
}
