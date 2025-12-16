import React from "react";
import ChildPage5 from "../components/ChildPage5";

const Page5 = () => {
  const name = "Saad Kanani";
  const age = "20";
  const isAdulte = "true";
  const languages = 12;

  const typesOfProps = {
    name: typeof name,
    age: typeof age,
    isAdulte: typeof isAdulte,
    languages: typeof languages,
  };
  return (
    <div>
      <h1 className="text-center text-6xl">Props</h1>
      <ChildPage5 name={name} age={age} isAdulte={isAdulte} languages={languages} typesOfProps={typesOfProps} />
      {/* <ChildPage5
        name="Saad" 
        age="20" 
        isAdulte="yes" 
        languages="JS" 
        typesOfProps={5} 
      /> */}
    </div>
  );
};

export default Page5;
