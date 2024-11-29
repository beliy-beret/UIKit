import { Button, CheckBox, TextArea } from "./components";
import "./style.css";
import { Avatar } from "./components/Avatar";
import ava from "./assets/pikachu.png";

function App() {
  return (
    <section>
      <div className="block">
        <Button>My button</Button>
        <Button variant="blueSecondary">My button</Button>
        <Button variant="blueOutline">My button</Button>
        <Button variant="blueLink">My button</Button>
      </div>
      <div className="block">
        <CheckBox readOnly />
        <CheckBox checked readOnly />
      </div>
      <div className="block textarea">
        <TextArea defaultValue="Разработчик новых методов изготовления датчиков из ОЭЗ «Дубна» получил статус «Национального чемпиона»" />
        <TextArea
          error
          defaultValue="Разработчик новых методов изготовления датчиков из ОЭЗ «Дубна» получил статус «Национального чемпиона»"
        />
      </div>
      <div className="block avatars">
        <Avatar variant="Small" userInitials="KS" />
        <Avatar userInitials="KS" />
        <Avatar variant="Large" userInitials="KS" />
      </div>
      <div className="block avatars">
        <Avatar variant="Small" userInitials="KS" imgSrc={ava} />
        <Avatar userInitials="KS" imgSrc={ava} />
        <Avatar variant="Large" userInitials="KS" imgSrc={ava} />
      </div>
    </section>
  );
}

export default App;
