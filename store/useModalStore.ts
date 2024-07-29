import { Modals } from "@/utils/modals";
import { create } from "zustand";

interface ModalStore {
  activeModal?: string;
  setActiveModal: (a: Modals) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: undefined,
  setActiveModal: (data) =>
    set({
      activeModal: data,
    }),
  closeModal: () =>
    set({
      activeModal: undefined,
    }),
}));
