import "./App.css";
import Button from "./Button";

function App() {
  return (
    <>
      {/* <Hi /> */}
      {/* <Button className="px-8" type="button">
        Hello Planted 🌳
      </Button> */}
      <Bye />
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
