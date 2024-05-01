import { useState } from "react";
import Display from "./Display";
import Numberpad from "./Numberpad";

function App() {
  const [display, setDisplay] = useState("0");
  const changeDisplay = (target) => {
    switch (target) {
      case "AC":
        setDisplay("0");
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (display === "0" || display[0] === "=") {
          setDisplay(target);
        } else if (/[+\-*/]0$/.test(display)) {
          setDisplay(display.slice(0, display.length - 1) + target);
        } else {
          setDisplay(display + target);
        }
        break;
      case "/":
      case "*":
      case "+":
        if (display[0] === "=") {
          setDisplay(display.slice(1) + target);
        } else if (!/[+\-*/]$/.test(display)) {
          setDisplay(display + target);
        } else if (/[+\-*/]{2}$/.test(display)) {
          setDisplay(display.slice(0, display.length - 2) + target);
        } else {
          setDisplay(display.slice(0, display.length - 1) + target);
        }
        break;
      case "-":
        if (display[0] === "=") {
          setDisplay(display.slice(1) + target);
        } else if (!/[+\-*/]$/.test(display)) {
          setDisplay(display + target);
        } else if (/\-$/.test(display)) {
          setDisplay(display);
        } else if (/[+\-*/]{2}$/.test(display)) {
          setDisplay(display);
        } else {
          setDisplay(display + target);
        }

        break;
      case "DEL":
        if (display.length == 1) {
          setDisplay("0");
        } else {
          setDisplay(display.slice(0, display.length - 1));
        }
        break;
      case "0":
        if (
          display.match(/[0-9.]*$/)[0] !== "0" ||
          display.match(/[0-9.]*$/)[0].length === 0
        ) {
          setDisplay(display + target);
        } else {
          console.log("Cannot put more than one 0 at the beggining");
        }
        break;
      case "000":
        if (display.match(/[0-9.]*$/)[0].length > 1) {
          setDisplay(display + target);
        } else {
          console.log("Cannot put more than one 0 at the beggining");
        }
        break;

      case ".":
        if (display.match(/-?[0-9.]*$/)[0].indexOf(".") === -1) {
          setDisplay(display + target);
        } else {
          console.log("Cannot put more than one period '.' on a number");
        }
        break;
      case "=":
        if (display[display.length - 1] !== "=") {
          setDisplay("=" + eval(display));
        }
        break;
    }
  };

  return (
    <div id="body">
      <Display display={display} />
      <Numberpad changeDisplay={changeDisplay} />
    </div>
  );
}

export default App;
