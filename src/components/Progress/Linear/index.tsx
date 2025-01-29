import * as S from "./style";

type Props = {
  status: number;
};

export const LinearProgress = ({ status }: Props) => {
  return (
    <S.Track className="progress-track">
      <S.Progress className="progress-value" $status={status} />
    </S.Track>
  );
};
