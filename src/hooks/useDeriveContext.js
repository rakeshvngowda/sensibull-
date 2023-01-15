import { useContext } from "react";
import { DeriveContext } from "../context/DeriveContext";

export const useDeriveContext = () => {
  const context = useContext(DeriveContext);

  if (!context) {
    throw Error("useContext should inside DeriveCOntext");
  }

  return context;
};
