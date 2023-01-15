import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeriveContext } from "../hooks/useDeriveContext";
import Childs from "./Childs";

const url = "https://prototype.sbulltech.com/api/derivatives";

export default function Derivative() {
  const [derivatives, setDerivatives] = useState([]);
  const { token } = useDeriveContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}/${token}`)
      .then((res) => res.json())
      .then((data) => {
        setError(null);
        console.log(data);
        if (data.success === true) {
          setDerivatives(data.payload);
        }
        if (data.success === false) {
          setError(data.err_msg);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <Link to="/">
        <span>back</span>
      </Link>
      <Childs derivatives={derivatives} />
      {error && <div>{error}</div>}
    </div>
  );
}
