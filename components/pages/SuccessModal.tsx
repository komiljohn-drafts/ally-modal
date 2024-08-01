import React from "react";

import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/modals";

import AriaModal from "../ui/aria-modal";
import LottieAnimation from "../ui/lottie-animation";
import { SimpleText } from "../ui/typography";

export default function SuccessModal() {
  const { activeModal, closeModal, modalData } = useModalStore();
  const isOpen = activeModal === Modals.SUCCESS_MODAL;

  return (
    <AriaModal isOpen={isOpen} onClose={closeModal} className="overflow-hidden relative">
      <div className="py-10 text-center">
        <SimpleText className="text-2xl font-medium mb-5">Success</SimpleText>
        <LottieAnimation />
        <SimpleText tag="pre" className="text-sm px-6 mt-5 mx-auto text-left w-fit">
          {JSON.stringify(modalData, null, "\t")}
        </SimpleText>
      </div>
    </AriaModal>
  );
}
