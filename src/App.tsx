import {
  Button,
  CheckBox,
  SelectWithSearch,
  TextArea,
  Select,
  Avatar,
  MultipleSelect,
} from "./components";
import "./style.css";
import ava from "./assets/pikachu.png";
import { Option } from "./components/Select/types.ts";
import { useMemo, useState } from "react";

const options: Option[] = [
  { value: "0", label: "Все" },
  { value: "1", label: "Яблоко" },
  { value: "2", label: "Груша" },
  { value: "3", label: "Вишня" },
  { value: "4", label: "Черешня" },
  { value: "5", label: "арбуз" },
  { value: "6", label: "дыня" },
  { value: "7", label: "апельсин" },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectWithSearchValue, setSelectWithSearchValue] = useState("");
  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((option) => option.label.includes(search));
  }, [search]);

  const [defaultSelectValue, setDefaultSeletValue] = useState(options[0].value);

  const [multipleSelectValues, setMultipleSelectValues] = useState<string[]>([
    options[0].value,
  ]);
  const disabledValues = useMemo<string[]>(() => {
    if (multipleSelectValues.length < 2) {
      return [multipleSelectValues[0]];
    }

    return [];
  }, [multipleSelectValues]);

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
      <div className="block">
        <Select
          options={options}
          selectedValue={defaultSelectValue}
          onSelect={(value) => setDefaultSeletValue(value)}
        />

        <MultipleSelect
          options={options}
          disabledValues={disabledValues}
          selectedValues={multipleSelectValues}
          onSelect={setMultipleSelectValues}
        />

        <SelectWithSearch
          options={filteredOptions}
          value={search}
          selectedValue={selectWithSearchValue}
          onSelect={(value) => setSelectWithSearchValue(value)}
          onChange={(search) => setSearch(search)}
          onReset={() => {
            setSearch("");
            setSelectWithSearchValue("");
          }}
        />
      </div>
    </section>
  );
}

export default App;
