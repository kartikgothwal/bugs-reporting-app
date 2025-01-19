import { useEffect, useState } from "react";

const HOC = (OriginalComponent: any) => {
  function GetData(props: any) {
    const [names, setNames] = useState<any>();
    useEffect(() => {
      const getEmails = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setNames(data);
      };
      getEmails();
    }, []);
    return <OriginalComponent data={names} {...props} />;
  }
  return GetData;
};

export default HOC;
