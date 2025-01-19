import HOC from "../HOC/hoc";

const Two = ({ data, txt }) => {
  console.log("🚀 ~ Two ~ data:", data);

  return <div>{txt}</div>;
};

export default HOC(Two);
