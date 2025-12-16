import React from "react";
import PropTypes from "prop-types";

const ChildPage5 = ({ name, age, isAdulte, languages, typesOfProps }) => {
    console.log(ChildPage5.propTypes);

  return (
    <div>
      <ul>
        <li>
          <p className="font-bold">
            Name: <span className="font-semibold text-sky-600">{ name}</span> |
            Type:{" "}
            <span className="font-semibold text-emerald-600">
              {typeof name}
            </span>
          </p>
        </li>
        <li>
          <p className="font-bold">
            Age: <span className="font-semibold text-sky-600">{age}</span> |
            Type:{" "}
            <span className="font-semibold text-emerald-600">
              {typesOfProps.age}
            </span>
          </p>
        </li>
        <li>
          <p className="font-bold">
            Is Adulte ?:{" "}
            <span className="font-semibold text-sky-600">
              {isAdulte ? "Yes" : "Non"}
            </span>{" "}
            | Type:{" "}
            <span className="font-semibold text-emerald-600">
              {typesOfProps.isAdulte}
            </span>
          </p>
        </li>
        <li>
          <p className="font-bold">
            Languages:{" "}
            <span className="font-semibold text-sky-600">
              {languages}
            </span>{" "}
            | Type:{" "}
            <span className="font-semibold text-emerald-600">
              {typesOfProps.languages}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

ChildPage5.propTypes = {
  name: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  isAdulte: PropTypes.bool.isRequired,
  languages: PropTypes.array.isRequired,
  typesOfProps: PropTypes.object.isRequired,
};

export default ChildPage5;
