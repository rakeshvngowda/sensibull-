import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDeriveContext } from "../hooks/useDeriveContext";
import Derivative from "./Derivative";
import { updateToken, removeToken } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const url = "https://prototype.sbulltech.com/api/quotes";
export default function Name({ item }) {
  const [price, setPrice] = useState(0);
  // const { user, dispatch } = useDeriveContext();
  // const token = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`${url}/${item.token}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newPrice = data.payload.price;
        setPrice(newPrice);
      });
  }, []);

  const handleTokenUpdate = () => {
    // dispatch({ type: "UPDATE_TOKEN", payload: item.token });
    dispatch(updateToken(item.token))
  };

  return (
    <div>
      <span>{item.underlying}: </span>
      <span>{price}</span>
      {/* <button>Show Derivatives</button> */}
      <Link to="/derivatives">
        <button onClick={handleTokenUpdate}>Show derivatives</button>
      </Link>
    </div>
  );
}
