import {
  type KeyboardEvent,
  type ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./styles";
import { type Option as OptionType } from "../types.ts";
import { Option, OptionsBox } from "../Options";

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
  const value =
    options.filter((option) => option.value === selectedValue)?.[0]?.label ||
    "";
  const optionsRef = useRef<HTMLDialogElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const scrollToActive = () => {
    const container = optionsRef.current;
    const activeElement: HTMLElement | null =
      container && container.querySelector('[aria-current="true"]');

    if (activeElement && container) {
      container.scrollTo({
        top: activeElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToActive();
  }, [highlightedIndex]);

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
    } else if (event.key === "Enter" && !showDropdown) {
      setShowDropdown(true);
    } else if (
      event.key === "Enter" &&
      showDropdown &&
      highlightedIndex === -1
    ) {
      setShowDropdown(false);
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(options[highlightedIndex]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    const handleFocus = (event: FocusEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focusin", handleFocus);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", handleFocus);
    };
  }, []);

  return (
    <S.CustomSelect aria-expanded={showDropdown} $error={error} ref={selectRef}>
      <input
        className="uikit-select-input"
        disabled={disabled}
        type="text"
        value={value}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
      />
      <span className="chevron" onClick={() => setShowDropdown(!showDropdown)}>
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
      </span>

      <OptionsBox
        open={showDropdown}
        isOpen={showDropdown}
        ref={optionsRef}
        style={{ width: "100%" }}
      >
        {options.map((option, index) => (
          <Option
            key={option.value}
            id={option.value}
            onMouseDown={() => handleSelect(option)}
            onMouseEnter={() => setHighlightedIndex(-1)}
            onMouseOut={() => setHighlightedIndex(index)}
            role="option"
            aria-selected={selectedValue === option.value}
            aria-current={highlightedIndex === index}
          >
            {renderOption ? renderOption(option) : option.label}
          </Option>
        ))}
      </OptionsBox>
    </S.CustomSelect>
  );
};
