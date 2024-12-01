import {
  type KeyboardEvent,
  type ChangeEvent,
  type ReactElement,
  useRef,
  useState,
  useEffect,
} from "react";
import * as S from "./style";
import { type Option as OptionType } from "../types.ts";
import { Option, OptionsBox } from "../Options";
import { Input } from "../../Input";

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
  onFocus?: () => void;
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
  onFocus,
}: Props<T>) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
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

  const handleReset = () => {
    onChange("");
    setHighlightedIndex(-1);
    if (onReset) onReset();
  };

  const handleFocus = () => {
    setShowDropdown(true);
    if (onFocus) {
      onFocus();
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
    <S.Wrapper ref={selectRef}>
      {onReset && (
        <span className="reset-button" onClick={handleReset}>
          &#10005;
        </span>
      )}

      <Input
        ref={inputRef}
        disabled={disabled}
        type="text"
        value={value}
        autoComplete="off"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        aria-controls="dropdown-list"
        aria-expanded={showDropdown}
      />

      <OptionsBox
        open={showDropdown}
        isOpen={showDropdown}
        ref={optionsRef}
        style={{ width: "100%" }}
      >
        {loading ? (
          <Option>Загрузка...</Option>
        ) : (
          options.map((option, index) => (
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
          ))
        )}
      </OptionsBox>
    </S.Wrapper>
  );
};
