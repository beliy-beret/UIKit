import { Button, CheckBox, TextArea } from "../lib/main.ts";

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="bluePrimary">My button</Button>
        <Button variant="blueSecondary">My button</Button>
        <Button variant="blueOutline">My button</Button>
        <Button variant="blueLink">My button</Button>
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <CheckBox readOnly />
        <CheckBox checked readOnly />
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <TextArea>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          asperiores autem consequatur dolor enim excepturi harum maiores
          necessitatibus nemo obcaecati perspiciatis placeat quam sed vero
          voluptate. Aperiam eum quia sapiente.
        </TextArea>
        <TextArea error>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          asperiores autem consequatur dolor enim excepturi harum maiores
          necessitatibus nemo obcaecati perspiciatis placeat quam sed vero
          voluptate. Aperiam eum quia sapiente.
        </TextArea>
      </div>
    </div>
  );
}

export default App;
