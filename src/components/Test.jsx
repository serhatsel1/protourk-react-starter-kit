import { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component ilk yüklendiğinde çalışır");

    return () => {
      console.log("component destroyed");
    };
  }, []);

  useEffect(() => {
    console.log("Count Değişti :", count);
  }, [count]);

  useEffect(() => {
    console.log("component render oldu");
  });

  const [empty, setEmpty] = useState(false);

  return (
    <>
    
      <button onClick={() => setEmpty((i) => !i)}>
        --s{empty ? "boş" : ""}
      </button>
      <button
        className="border flex"
        onClick={() => setCount((count) => count + 1)}
      >
        sayıcı : {count}
      </button>
      <div>selam</div>
    </>
  );
};

export default Test;
