import { Button } from "../Button";
import { FormSuccess } from "./icons/FormSuccess";
import { FormReject } from "./icons/FormReject";
import * as S from "./style";

type Props = {
  status: "success" | "reject";
  title?: string;
  description?: string;
  onClose: () => void;
};

export const FormSubmitNotification = ({
  title,
  status,
  description,
  onClose,
}: Props) => {
  const sendToSupport = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "mailto:mipn_secure@mosreg.ru");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText("mipn_secure@mosreg.ru");
    }
  };

  if (status === "success") {
    return (
      <S.Notification>
        <FormSuccess />

        <S.Title>{title || "Форма успешно отправлена!"}</S.Title>

        <S.Description>
          {description || "В скором времени с вами свяжется наш менеджер"}
        </S.Description>

        <Button design="Completed" onClick={onClose}>
          Закрыть
        </Button>
      </S.Notification>
    );
  }

  return (
    <S.Notification>
      <FormReject />

      <S.Title>{title || "Обращение не было отправлено"}</S.Title>

      <S.Description>
        {description || (
          <>
            Направьте информацию о проблеме на почту{" "}
            <span className="accent" onClick={copyToClipboard}>
              mipn_secure@mosreg.ru
            </span>
            , либо нажмите на “Сообщить о проблеме”
          </>
        )}
      </S.Description>

      <Button design="Dangerous" onClick={sendToSupport}>
        Сообщить о проблеме
      </Button>
      <Button variant="Outline" design="Dangerous" onClick={onClose}>
        Закрыть
      </Button>
    </S.Notification>
  );
};
