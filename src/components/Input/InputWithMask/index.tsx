import { useIMask } from "react-imask";
import { Input } from "../defaultInput";

type Props = {
  onChangeValue: (value: string) => void;
  value: string;
  error?: boolean;
  mask?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const InputWithMask = ({
  onChangeValue,
  error,
  value,
  placeholder,
  disabled,
  mask = "+{7}(000)000-00-00",
}: Props) => {
  const { ref: inputRef } = useIMask<HTMLInputElement>(
    { mask },
    {
      onAccept: (value) => onChangeValue(value),
      defaultValue: value,
    },
  );

  return (
    <Input
      ref={inputRef}
      error={error}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
