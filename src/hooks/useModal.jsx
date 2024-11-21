import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    closeModal,
    openModal,
  };
}

export default useModal;
