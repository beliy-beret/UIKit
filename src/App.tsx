import {
  Button,
  CheckBox,
  SelectWithSearch,
  TextArea,
  Select,
  Avatar,
  MultipleSelect,
  Input,
  Link,
  Badge,
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

const CustomSelectOption = ({
  checked,
  label,
}: Pick<Option, "label"> & { checked: boolean }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <CheckBox id={label} checked={checked} readOnly /> <span>{label}</span>
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");
  const [selectWithSearchValue, setSelectWithSearchValue] = useState("");
  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase()),
    );
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
        <Button variant="Primary" design="Primary">
          My button
        </Button>
        <Button variant="Secondary" design="Primary">
          My button
        </Button>
        <Button variant="Outline" design="Primary">
          My button
        </Button>
        <Button variant="Text" design="Primary">
          My button
        </Button>
      </div>
      <div className="block">
        <Button variant="Primary" design="Body">
          My button
        </Button>
        <Button variant="Secondary" design="Body">
          My button
        </Button>
        <Button variant="Outline" design="Body">
          My button
        </Button>
        <Button variant="Text" design="Body">
          My button
        </Button>
      </div>
      <div className="block">
        <Button variant="Primary" design="Warning">
          My button
        </Button>
        <Button variant="Secondary" design="Warning">
          My button
        </Button>
        <Button variant="Outline" design="Warning">
          My button
        </Button>
        <Button variant="Text" design="Warning">
          My button
        </Button>
      </div>
      <div className="block">
        <Button variant="Primary" design="Informative">
          My button
        </Button>
        <Button variant="Secondary" design="Informative">
          My button
        </Button>
        <Button variant="Outline" design="Informative">
          My button
        </Button>
        <Button variant="Text" design="Informative">
          My button
        </Button>
      </div>
      <div className="block">
        <Button variant="Primary" design="Dangerous">
          My button
        </Button>
        <Button variant="Secondary" design="Dangerous">
          My button
        </Button>
        <Button variant="Outline" design="Dangerous">
          My button
        </Button>
        <Button variant="Text" design="Dangerous">
          My button
        </Button>
      </div>
      <div className="block">
        <Button variant="Primary" design="Completed">
          My button
        </Button>
        <Button variant="Secondary" design="Completed">
          My button
        </Button>
        <Button variant="Outline" design="Completed">
          My button
        </Button>
        <Button variant="Text" design="Completed">
          My button
        </Button>
      </div>

      <div className="block">
        <Link design="Informative" href="">
          Library link
        </Link>
        <Link design="Body" href="">
          Library link
        </Link>
        <Link design="Primary" href="">
          Library link
        </Link>
        <Link design="Completed" href="">
          Library link
        </Link>
        <Link design="Dangerous" href="">
          Library link
        </Link>
      </div>

      <div className="block">
        <CheckBox id="checkbox-1" readOnly />
        <CheckBox id="checkbox-2" checked readOnly />
        <CheckBox id="checkbox-3" disabled readOnly />
        <CheckBox id="checkbox-4" disabled checked readOnly />
      </div>

      <div className="block textarea">
        <TextArea defaultValue="Разработчик новых методов изготовления датчиков из ОЭЗ «Дубна» получил статус «Национального чемпиона»" />
        <TextArea
          error
          defaultValue="Разработчик новых методов изготовления датчиков из ОЭЗ «Дубна» получил статус «Национального чемпиона»"
        />
      </div>

      <div className="block textarea">
        <Input />
        <Input error />
        <Input placeholder="Placeholder text" />
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
        <MultipleSelect
          options={options}
          disabledValues={disabledValues}
          selectedValues={multipleSelectValues}
          onSelect={setMultipleSelectValues}
        />
        <MultipleSelect
          options={options}
          renderOption={({ label, selected }) => (
            <CustomSelectOption checked={selected} label={label} />
          )}
          disabledValues={disabledValues}
          selectedValues={multipleSelectValues}
          onSelect={setMultipleSelectValues}
        />
        <Select
          options={options}
          selectedValue={defaultSelectValue}
          onSelect={(value) => setDefaultSeletValue(value)}
        />
      </div>
      <div className="block">
        <Badge>Label</Badge>
        <Badge design="Primary">Label</Badge>
        <Badge design="Warning">Label</Badge>
        <Badge design="Dangerous">Label</Badge>
        <Badge design="Informative">Label</Badge>
      </div>
    </section>
  );
}

export default App;
