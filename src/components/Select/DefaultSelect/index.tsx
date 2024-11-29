import {
  type KeyboardEvent,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./styles";
import { type Option as OptionType } from "../types.ts";
import { OptionsWrapper, Option } from "../Options";

type Props<T extends OptionType> = {
  error?: boolean;
  options: T[];
  selectedValue: string;
  disabled?: boolean;
  renderOption?: (option: T) => ReactElement;
  onSelect: (optionValue: T["value"]) => void;
};

export const Select = <T extends OptionType>({
  options,
  error,
  selectedValue,
  disabled,
  renderOption,
  onSelect,
}: Props<T>) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const value =
    options.filter((option) => option.value === selectedValue)?.[0]?.label ||
    "";

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

  const handleSelect = (option: OptionType) => {
    onSelect(option.value);
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

  const handleFocus = () => {
    setShowDropdown(true);
  };

  return (
    <S.CustomSelect aria-expanded={showDropdown} $error={error}>
      <input
        ref={inputRef}
        disabled={disabled}
        type="text"
        value={value}
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={() => setShowDropdown(false)}
        onKeyDown={handleKeyDown}
        aria-controls="dropdown-list"
        readOnly
      />
      <div className="chevron">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
            fill="#1D1C29"
          />
        </svg>
      </div>

      <OptionsWrapper
        isOpen={showDropdown}
        id="dropdown-list"
        ref={dropdownRef}
      >
        {options.map((option, index) => (
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
        ))}
      </OptionsWrapper>
    </S.CustomSelect>
  );
};
