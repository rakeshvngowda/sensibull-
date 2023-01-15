import { createContext, useReducer } from "react";

export const DeriveContext = createContext();

export const deriveReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { token: action.payload };
    case "REMOVE_TOKEN":
      return { token: null };
    default:
      return state;
  }
};

export const DeriveContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(deriveReducer, {
    token: null,
  });

  return (
    <DeriveContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DeriveContext.Provider>
  );
};
