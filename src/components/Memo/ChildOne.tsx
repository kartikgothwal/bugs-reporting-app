import React from "react";

const PureComponent = ({name}): React.ReactNode => {
  console.log("PureComponent Count increase");
  return (
    <>
      <h1>Purecomponent: {name.a}</h1>
      <h1>Purecomponent: {name.b}</h1>
    </>
  );
};

export default React.memo(PureComponent);
