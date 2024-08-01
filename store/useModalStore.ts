import { create } from "zustand";

import { Modals } from "@/utils/modals";

interface ModalStore {
  activeModal?: string;
  setActiveModal: (a: Modals) => void;
  modalData?: { [key: string]: string | number | boolean };
  setModalData: (a: { [key: string]: string | number | boolean }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: undefined,
  modalData: undefined,
  setActiveModal: (data) =>
    set({
      activeModal: data,
    }),
  closeModal: () =>
    set({
      activeModal: undefined,
    }),

  setModalData: (data) =>
    set({
      modalData: data,
    }),
}));
