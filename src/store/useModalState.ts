import { create } from "zustand";

export type ModalState = {
  isPreApplyModalOpen: boolean;
  setIsPreApplyModalOpen: (isPreApplyModalOpen: boolean) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isPreApplyModalOpen: false,
  setIsPreApplyModalOpen: (isPreApplyModalOpen: boolean) => {
    set((state) => ({ ...state, isPreApplyModalOpen: isPreApplyModalOpen }));
  },
}));
