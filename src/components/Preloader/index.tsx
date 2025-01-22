import { Modal } from "../Modal";
import { Spinner } from "../Spiner";
import { Loader } from "./style";

export const Preloader = () => {
  return (
    <Modal>
      <Loader>
        <Spinner size="medium" />
        <p>Загрузка...</p>
      </Loader>
    </Modal>
  );
};
