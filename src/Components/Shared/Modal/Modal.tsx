import React from "react";
import {Background, CloseButton, ModalCard, ModalWrapper} from "./Modal.styles";

type Props = {
  toggle:()=>void;
  children:JSX.Element;
}

const Modal : React.FC<Props> = ({toggle,children}) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <CloseButton onClick={toggle}>
         X
        </CloseButton>
        {children}
      </ModalCard>
      <Background onClick={toggle} />
    </ModalWrapper>
  );
};

export default Modal;
