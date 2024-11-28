import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../Input";
import * as S from "./styled";
import { MonthHeader } from "./MonthHeader";

type Props = {
  from: Date | null;
  to: Date | null;
  maxDate?: Date;
  minDate?: Date;
  placeholder?: string;
  onChange: (values: [Date | null, Date | null]) => void;
};

export const DateRangePicker = forwardRef<DatePicker, Props>(
  ({ from, to, maxDate, minDate, placeholder, onChange }, ref) => {
    return (
      <S.Wrapper>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          placeholderText={placeholder}
          ref={ref}
          locale={ru}
          selectsRange
          startDate={from || undefined}
          endDate={to || undefined}
          onChange={onChange}
          customInput={<Input />}
          maxDate={maxDate}
          minDate={minDate}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <MonthHeader
              increaseMonth={increaseMonth}
              decreaseMonth={decreaseMonth}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
              date={date}
            />
          )}
          showIcon={true}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.33301 3.33333C2.96482 3.33333 2.66634 3.63181 2.66634 4V13.3333C2.66634 13.7015 2.96482 14 3.33301 14H12.6663C13.0345 14 13.333 13.7015 13.333 13.3333V4C13.333 3.63181 13.0345 3.33333 12.6663 3.33333H3.33301ZM1.33301 4C1.33301 2.89543 2.22844 2 3.33301 2H12.6663C13.7709 2 14.6663 2.89543 14.6663 4V13.3333C14.6663 14.4379 13.7709 15.3333 12.6663 15.3333H3.33301C2.22844 15.3333 1.33301 14.4379 1.33301 13.3333V4Z"
                fill="#6F6D85"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6667 0.666504C11.0349 0.666504 11.3333 0.964981 11.3333 1.33317V3.99984C11.3333 4.36803 11.0349 4.6665 10.6667 4.6665C10.2985 4.6665 10 4.36803 10 3.99984V1.33317C10 0.964981 10.2985 0.666504 10.6667 0.666504Z"
                fill="#6F6D85"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.33366 0.666504C5.70185 0.666504 6.00033 0.964981 6.00033 1.33317V3.99984C6.00033 4.36803 5.70185 4.6665 5.33366 4.6665C4.96547 4.6665 4.66699 4.36803 4.66699 3.99984V1.33317C4.66699 0.964981 4.96547 0.666504 5.33366 0.666504Z"
                fill="#6F6D85"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33301 6.66667C1.33301 6.29848 1.63148 6 1.99967 6H13.9997C14.3679 6 14.6663 6.29848 14.6663 6.66667C14.6663 7.03486 14.3679 7.33333 13.9997 7.33333H1.99967C1.63148 7.33333 1.33301 7.03486 1.33301 6.66667Z"
                fill="#6F6D85"
              />
            </svg>
          }
        />
      </S.Wrapper>
    );
  },
);
