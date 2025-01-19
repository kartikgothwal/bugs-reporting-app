import React, { useEffect, useState } from "react";
import HOC from "../HOC/hoc";

const One = ({ data, txt }) => {
  console.log("🚀 ~ One ~ data:", data);

  return <div>{txt}</div>;
};

export default HOC(One);
