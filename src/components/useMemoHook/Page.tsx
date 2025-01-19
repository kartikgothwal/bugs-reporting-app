import React, { useMemo, useState } from "react";
const ExpensiveComponent = (): React.ReactNode => {
  const sum = () => {
    let data = 0;
    for (let i = 0; i <= 1000000000; i++) {
      data += i;
    }
    return data;
  };
  const total = useMemo(() => sum(), []);
  return (
    <>
      <h1>sum:{total?total:20}</h1>
    </>
  );
};
const Page = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <ExpensiveComponent />
      <h1>Normal : {count}</h1>
      <button onClick={handleCount}>count increase</button>
    </div>
  );
};

export default Page;
