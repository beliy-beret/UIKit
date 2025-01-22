import {
  type KeyboardEvent,
  type ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as S from "./styles.ts";
import { type Option as OptionType } from "../types.ts";
import { OptionsBox, Option } from "../Options";

type Props<T extends OptionType> = {
  error?: boolean;
  options: T[];
  disabled?: boolean;
  selectedValues: string[];
  disabledValues: string[];
  renderOption?: (option: T & { selected: boolean }) => ReactElement;
  onSelect: (optionValue: Array<T["value"]>) => void;
};

export const MultipleSelect = <T extends OptionType>({
  options,
  error,
  selectedValues,
  disabledValues,
  disabled,
  renderOption,
  onSelect,
}: Props<T>) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const optionsRef = useRef<HTMLDialogElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const value = useMemo<string>(() => {
    const arr: string[] = [];
    if (selectedValues.length) {
      options.forEach((option) => {
        selectedValues.forEach((value) => {
          if (option.value === value) {
            arr.push(option.label);
          }
        });
      });
    }

    return arr.length ? arr.join(",") : "";
  }, [selectedValues, options]);

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

  const handleSelect = (option: OptionType) => {
    if (!selectedValues.includes(option.value)) {
      onSelect([...selectedValues, option.value]);
    } else {
      if (selectedValues.length > 1) {
        const newValues = selectedValues.filter(
          (item) => item !== option.value,
        );
        onSelect(newValues);
      }
    }
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

  return (
    <S.CustomSelect aria-expanded={showDropdown} ref={selectRef}>
      <input
        aria-invalid={error}
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
            aria-selected={selectedValues.some(
              (value) => value === option.value,
            )}
            aria-current={highlightedIndex === index}
            aria-disabled={disabledValues.some(
              (value) => value === option.value,
            )}
          >
            {renderOption
              ? renderOption({
                  ...option,
                  selected: selectedValues.some(
                    (value) => value === option.value,
                  ),
                })
              : option.label}
          </Option>
        ))}
      </OptionsBox>
    </S.CustomSelect>
  );
};
