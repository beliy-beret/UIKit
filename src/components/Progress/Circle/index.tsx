import * as S from "./style";
import { ProgressSize } from "./types.ts";

type Props = {
  status: number;
  size?: ProgressSize;
  label?: string;
};

export const CircleProgress = ({ status, label, size = "xs" }: Props) => {
  return (
    <S.Chart $status={status} $size={size}>
      <div className="progress-info">
        {label && <p className="progress-label">{label}</p>}
        <p className="progress-status">{status}%</p>
      </div>
    </S.Chart>
  );
};
