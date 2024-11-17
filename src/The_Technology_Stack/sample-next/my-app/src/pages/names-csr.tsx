import { ResponseItemType, fetchNames } from "@/utils/fetch-names";
import { useEffect, useState } from "react";

function NamesCSR() {
  const [data, setData] = useState<ResponseItemType[] | []>();

  // Because a dependencies list wasn't specified, this will
  //  run on mount and on every rerender
  useEffect(() => {
    // notice that the `async` keyword wasn't used as part
    // the useEffect function argument
    async function fetchData() {
      let names;
      try {
        names = await fetchNames();
      } catch (err) {
        console.log("ERR", err);
      }
      setData(names);
    }
    fetchData();
  });

  const output = data?.map((item, idx) => {
    return (
      <li key={`name-${idx}`}>
        {item.id} : {item.name}
      </li>
    );
  });

  return <ul>{output}</ul>;
}

export default NamesCSR;
