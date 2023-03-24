import React from "react";
import { useRouter } from "next/router";

export default function Navprogramatically() {
  const router = useRouter();

  const orderProduct = () => {
    console.log("placed");
    // console.log(router);
    router.push("/user");
  };
  return (
    <div>
      <h1>adidas shoe</h1>
      <button onClick={orderProduct}>place order</button>
    </div>
  );
}
