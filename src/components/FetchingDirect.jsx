import { useEffect, useState } from "react";

export default function FetchingDirect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>Using useEffect</div>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

          {/* <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div> */}
    </div>
  );
}