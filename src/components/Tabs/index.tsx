import { KeyboardEvent, type ReactElement } from "react";
import * as S from "./styles";

export type Tab = {
  value: string;
  label: string;
};

type Props<T extends Tab> = {
  list: T[];
  selectedTab: T;
  onSelect: (tab: T) => void;
  className?: string;
  renderTab?: (tab: T) => ReactElement;
};

export const Tabs = <T extends Tab>({
  list,
  selectedTab,
  onSelect,
  renderTab,
  className = "",
}: Props<T>) => {
  const setPosition = (tab: T) => {
    onSelect(tab);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, tab: T) => {
    if (event.key === "Enter") {
      onSelect(tab);
    }
  };

  return (
    <S.Wrapper className={className} aria-label="tab-list">
      {list.length &&
        list?.map((tab, i) => (
          <S.TitleLink
            key={i}
            aria-selected={tab.value === selectedTab.value}
            aria-label="tab-item"
            onClick={() => setPosition(tab)}
            onKeyDown={(event) => handleKeyDown(event, tab)}
          >
            {renderTab ? renderTab(tab) : tab.label}
            <span className="line" aria-label="tab-line"></span>
            <input />
          </S.TitleLink>
        ))}
    </S.Wrapper>
  );
};
