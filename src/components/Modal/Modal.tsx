import Image from "next/image";
import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  onClickSubButton?: () => void;
  subButtonText?: string;
  large?: boolean;
  isHr?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  onClickSubButton,
  subButtonText,
  large,
  isHr = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleModalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleModalClick}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* overlay */}
      <div className="overlay fixed inset-0 bg-black bg-opacity-50" />
      {/* modal content */}
      <div
        ref={modalRef}
        className={`modal-content relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } ${large ? "max-w-xl" : ""}`}
      >
        {/* subButton(generate modal에서 쓰임) */}
        <div className="flex justify-between items-center px-6 pt-6 pb-3">
          {title && (
            <h2 className="text-lg font-semibold text-left">{title}</h2>
          )}
          {onClickSubButton && (
            <button
              onClick={onClickSubButton}
              className="text-gray-900 bg-gray-200 rounded-lg px-4 py-1.5 flex items-center gap-4 text-sm font-medium whitespace-nowrap hover:bg-gray-300"
            >
              <Image
                src="/svgs/sound_wave.svg"
                alt="sound-wave"
                width={0}
                height={0}
                style={{ width: "16px", height: "16px" }}
              />
              {subButtonText && subButtonText}
            </button>
          )}
          <button
            onClick={onClose}
            className="hover:bg-gray-200 p-2 rounded-md"
          >
            <Image
              src="/cancel.svg"
              alt="close"
              width={0}
              height={0}
              style={{ width: "20px", height: "auto" }}
            />
          </button>
        </div>
        {/* modal content */}
        {isHr && <hr className="mx-6 bg-gray-300 border-1 border-gray-300" />}
        <div className={`${isHr ? "p-6" : "px-6 pb-6"}`}>{children}</div>
      </div>
    </div>
  );
};
