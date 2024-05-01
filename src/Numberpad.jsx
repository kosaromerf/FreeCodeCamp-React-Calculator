import React from "react";
import Key from "./Key";

const Numberpad = ({ changeDisplay }) => {
  return (
    <div>
      <Key
        name="clear"
        content="AC"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="divide"
        content="/"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="multiply"
        content="*"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="delete"
        content="DEL"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="seven"
        content="7"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="eight"
        content="8"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="nine"
        content="9"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="subtract"
        content="-"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="four"
        content="4"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="five"
        content="5"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="six"
        content="6"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="add"
        content="+"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="one"
        content="1"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="two"
        content="2"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="three"
        content="3"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="equals"
        content="="
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="zero"
        content="0"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="decimal"
        content="."
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
      <Key
        name="thousand"
        content="000"
        onClick={(event) => changeDisplay(event.target.textContent)}
      />
    </div>
  );
};

export default Numberpad;
