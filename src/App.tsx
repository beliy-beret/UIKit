import { Button } from "../lib/main.ts";

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="bluePrimary">My button</Button>
        <Button variant="blueSecondary">My button</Button>
        <Button variant="blueOutline">My button</Button>
        <Button variant="blueLink">My button</Button>
      </div>
    </div>
  );
}

export default App;
