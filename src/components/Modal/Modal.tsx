import { useState } from "react";
import { Hero } from "../Card/Card";

import "./modal.scss";

interface ModalProps {
  /*   title: string;
  body: string; */
  data: Hero | undefined;
  closeModal: () => void;
}

export function Modal({ data, closeModal }: ModalProps) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={closeModal}>X</button>
        <div className="title">{data?.name}</div>
        <div className="body">Hero information</div>
        <div className="footer">More hero information</div>
      </div>
    </div>
  );
}
