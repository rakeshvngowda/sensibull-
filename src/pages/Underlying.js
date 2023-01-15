import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Company from "./Company";

const url = "https://prototype.sbulltech.com/api/underlyings";

export default function Underlying() {
  const [underlyuings, setUnderlyuings] = useState([]);
  const [error,SetError] = useState(null)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetError(null)
        setUnderlyuings([]);
        const names = data.payload;
        setUnderlyuings((prevState) => {
          return [...prevState, ...names];
        });
        console.log(underlyuings);
      })
      .catch((error) => {
        console.log(error.message);
        SetError(error.message)
      });
  }, []);
  return (
    <div>
      <Company underlyuings={underlyuings} />
      {error && <div>{error}</div>}
    </div>
  );
}
