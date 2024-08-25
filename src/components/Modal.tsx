import { useEffect, useState, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  className?: string;
};

function Modal({ isOpen, children, className }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This ensures the modal is rendered only on the client side
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const content = (
    <div
      className={`fixed inset-0 w-full h-full z-[9999] bg-black/30 ${className}`}
    >
      {children}
    </div>
  );

  return isOpen
    ? createPortal(content, document.getElementById("modal") as HTMLElement)
    : null;
}

export default Modal;
