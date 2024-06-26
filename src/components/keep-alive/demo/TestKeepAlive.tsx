/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useRoutes } from "react-router-dom";
import { KeepAliveLayout, KeepOutlet, useKeepOutlet } from "../KeepAlive";
import { Suspense, useState } from "react";

export default function TestKeepAlive() {
  let element = useRoutes([
    {
      path: "/",
      element: <Bar />,
      children: [
        {
          path: "aaa",
          element: <Aaa />,
        },
        {
          path: "bbb",
          element: <Bbb />,
        },
        {
          path: "ccc",
          element: <Ccc />,
        },
        {
          path: "ddd",
          element: <Ddd />,
        },
      ],
    },
  ]);
  return element;
}

function Bar() {
  return (
    <KeepAliveLayout paths={["/keep-alive/bbb", "/keep-alive/ddd"]}>
      <Foo />
    </KeepAliveLayout>
  );
}

function Foo() {
  // 方式一
  // const element = useKeepOutlet();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          width: "200px",
          height: "300px",
          margin: "0 auto",
        }}>
        <h1>test keep alive</h1>
        <p style={{ display: "flex", gap: "10px" }}>
          <Link to={"aaa"}>AAA</Link>
          <br />
          <Link to={"bbb"}>BBB</Link>
          <br />
          <Link to={"ccc"}>CCC</Link>
          <br />
          <Link to={"ddd"}>DDD</Link>
        </p>
        <KeepOutlet />
      </div>
    </Suspense>
  );
}

function Aaa() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightblue", padding: 10 }}>
      <h2>AAA: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

function Bbb() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightpink", padding: 10 }}>
      <h2>BBB: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

function Ccc() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightcoral", padding: 10 }}>
      <h2>Ccc: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

function Ddd() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightgreen", padding: 10 }}>
      <h2>Ddd: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
