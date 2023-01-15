import React from "react";
import Name from "./Name";

export default function Company({ underlyuings }) {
  return (
    <div>
      {underlyuings.map((item)=> {
        return (
            <Name item={item} key={item.token} />
        )
      })}
    </div>
  );
}
