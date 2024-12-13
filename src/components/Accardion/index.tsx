import { useState } from "react";
import * as S from "./style";

type Props = {
  open?: boolean;
  title: string;
  description: string;
  className?: string;
  id?: string;
};

export const Accordion = ({
  description,
  open = false,
  title,
  className = "",
  id,
}: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <S.Accordion className={className} id={id} aria-expanded={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>
        <span aria-label="accordion-title">{title}</span>

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
            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
            fill="#1D1C29"
          />
        </svg>
      </S.Title>

      <S.Description>
        <p aria-label="accordion-description">{description}</p>
      </S.Description>
    </S.Accordion>
  );
};
