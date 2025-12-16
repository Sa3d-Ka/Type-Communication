import React, { useRef, useState } from "react";

const Page4 = () => {
  const [count, setcount] = useState(0);

  const countRef = useRef(0);

  const inputRef = useRef('');

  const inputTextRef = useRef('');

  const fnUseRef = () => {
    countRef.current++;
    console.log(countRef);
  };

  const fnInput = () => {
    console.log(inputTextRef.current);
    console.log(inputRef);
  };

  return (
    <>
      <h1 className="text-center text-6xl mb-5">useState | useRef</h1>
      <div className="flex items-center justify-center gap-5 ">
        <div>
          <button
            onClick={() => setcount(count + 1)}
            className="bg-sky-400 rounded-md px-3 py-1 text-white"
          >
            useState: {count}
          </button>
        </div>
        <div>
          <button
            onClick={fnUseRef}
            className="bg-rose-400 rounded-md px-3 py-1 text-white"
          >
            useRef: {countRef.current}
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        onChange={(e)=> inputTextRef.current = e.target.value}
        className="border outline-0 border-gray-400 rounded-md p-2"
        placeholder="Typing..."
        type="text"
      />
      <br />
      <br />
      <button
        onClick={fnInput}
        className="bg-emerald-400 rounded-md px-3 py-1 text-white"
      >
        Click To display input value
      </button>
    </>
  );
};

export default Page4;
