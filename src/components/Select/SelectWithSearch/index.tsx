import {
  type KeyboardEvent,
  type ChangeEvent,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./style";
import { type Option as OptionType } from "../types.ts";
import { OptionsWrapper, Option } from "../Options";

type Props<T extends OptionType> = {
  options: T[];
  loading?: boolean;
  value: string;
  selectedValue: string;
  disabled?: boolean;
  renderOption?: (option: T) => ReactElement;
  onSelect: (optionValue: T["value"]) => void;
  onChange: (value: string) => void;
  onReset?: () => void;
};

export const SelectWithSearch = <T extends OptionType>({
  options,
  value,
  selectedValue,
  loading,
  disabled,
  onReset,
  renderOption,
  onSelect,
  onChange,
}: Props<T>) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onChange(value);
    setShowDropdown(true);
    setHighlightedIndex(-1);
  };

  const handleSelect = (option: OptionType) => {
    onSelect(option.value);
    onChange(option.label);
    setShowDropdown(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(options[highlightedIndex]);
    }
  };

  const handleReset = () => {
    onChange("");
    setHighlightedIndex(-1);
    if (onReset) onReset();
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  return (
    <S.Wrapper>
      {onReset && <button onClick={handleReset}>&#10005;</button>}

      <input
        ref={inputRef}
        disabled={disabled}
        type="text"
        value={value}
        autoComplete="off"
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={() => setShowDropdown(false)}
        onKeyDown={handleKeyDown}
        aria-controls="dropdown-list"
        aria-expanded={showDropdown}
      />

      <OptionsWrapper
        isOpen={showDropdown}
        id="dropdown-list"
        ref={dropdownRef}
      >
        {loading ? (
          <S.Option>Загрузка...</S.Option>
        ) : (
          options.map((option, index) => (
            <Option
              isSelected={selectedValue === option.value}
              key={option.value}
              id={option.value}
              onMouseDown={() => handleSelect(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
              role="option"
              aria-selected={highlightedIndex === index}
            >
              {renderOption ? renderOption(option) : option.label}
            </Option>
          ))
        )}
      </OptionsWrapper>
    </S.Wrapper>
  );
};
