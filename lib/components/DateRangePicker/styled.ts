import styled from "styled-components";
import { Colors } from "theme.ts";

export const Wrapper = styled.div`
  width: fit-content;

  .react-datepicker-popper {
    svg.react-datepicker__triangle {
      display: none;
    }

    button.react-datepicker__navigation {
      display: none;
    }

    .react-datepicker {
      border: none;
    }

    .react-datepicker__header {
      background-color: white;
      border: none;
      margin: unset;
      padding: unset;

      .react-datepicker__day-names {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: unset;
        padding: unset;
        .react-datepicker__day-name {
          ${({ theme }) => theme.text.font12.medium};
          text-transform: capitalize;
          color: ${Colors.blueGray["400"]};
          padding: 2px 6px;
          text-align: center;
          width: 35px;
        }
      }
    }

    .react-datepicker__month-container {
      padding: 24px;
      border-radius: 12px;
      border: 1px solid ${Colors.blueGray["25"]};
      box-shadow: 0 8px 16px -4px rgba(142, 140, 163, 0.1);
    }
    .react-datepicker__month {
      margin: unset;
      padding: unset;
    }

    .react-datepicker__week {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 4px;
      .react-datepicker__day {
        ${({ theme }) => theme.text.font12.medium};
        width: 40px;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        margin: unset;
        color: ${Colors.blueGray["400"]};

        &[aria-disabled="true"] {
          background-color: transparent;
          color: ${Colors.blueGray["25"]};
        }
        &[aria-current] {
          background-color: transparent;
        }

        &.react-datepicker__day--in-range,
        &.react-datepicker__day--in-selecting-range {
          background-color: ${Colors.blue["50"]};
          color: ${Colors.blue["10"]};
        }

        &.react-datepicker__day--range-start,
        &.react-datepicker__day--range-end,
        &.react-datepicker__day--selecting-range-start {
          background-color: ${Colors.blue["400"]};
        }
      }
    }
  }

  .react-datepicker__view-calendar-icon {
    position: relative;

    input {
      padding-left: 14px;
    }

    svg {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      right: 14px;
      translate: 0 -50%;
    }
  }
`;
