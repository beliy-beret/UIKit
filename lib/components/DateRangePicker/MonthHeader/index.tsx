import { memo } from "react";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import * as S from "./style";
import { Chevron } from "common/assets/icons";

type Props = Pick<
  ReactDatePickerCustomHeaderProps,
  | "date"
  | "decreaseMonth"
  | "increaseMonth"
  | "prevMonthButtonDisabled"
  | "nextMonthButtonDisabled"
>;

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const MonthHeader = memo(
  ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: Props) => {
    const activeMonth = getMonth(date);
    const year = getYear(date);

    return (
      <S.Header>
        <button
          aria-label="prev"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <Chevron />
        </button>
        <span>
          {monthNames[activeMonth]} {year}
        </span>
        <button
          aria-label="next"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <Chevron />
        </button>
      </S.Header>
    );
  },
);
