import React, { useMemo, useState } from "react";
import PureComponent from "./ChildOne";

const Normal = (): React.ReactNode => {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const a = 1;
  const b = 2;
  const obj = useMemo(() => {
    return { a, b };
  }, [a, b]);
  console.log("Parent Count increase");

  return (
    <>
      <h1>Normal : {count}</h1>
      <button onClick={handleCount}>count increase</button>
      <PureComponent name={obj} />
    </>
  );
};

export default Normal;
