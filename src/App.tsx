import { BedIcon } from "lucide-react";
import "./App.css";
import Button from "./Button";
import { useRef } from "react";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  console.log("buttonRef", buttonRef);
  return (
    <>
      {/* <Hi /> */}
      <Button type="button" variant="success" size="icon" ref={buttonRef}>
        <BedIcon className="size-5" />
      </Button>
      {/* <Bye /> */}
    </>
  );
}

export default App;

function Hi() {
  return (
    <div style={{ fontSize: "10rem", textAlign: "center", margin: "1em" }}>
      👋
    </div>
  );
}

function Bye() {
  return (
    <div style={{ fontSize: "10rem", textAlign: "center", margin: "1em" }}>
      🫡
    </div>
  );
}

// do not complain about unused imports
void Button, Hi, Bye;
