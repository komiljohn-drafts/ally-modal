"use client";

import React from "react";

import { FlagSvg, SaveIcon } from "@/public/icons";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/modals";

import AriaButton from "../ui/button";
import AriaModal from "../ui/modal";
import { SimpleText } from "../ui/typography";

export default function ExperienceModal() {
  const { activeModal, closeModal } = useModalStore();

  const isOpen = activeModal === Modals.EXPERIENCE_MODAL;

  return (
    <AriaModal isOpen={isOpen} onClose={closeModal} className="overflow-hidden">
      <div className="size-full shadow-icons-rounded-shadow top-0 left-0 rounded-full mt-6 ml-6 w-fit">
        <div className="border border-icon-border p-[11px] rounded-lg shadow-icon-bottom-shadow">
          <FlagSvg />
        </div>
      </div>
      <div className="px-6 py-4 text-lg">
        <SimpleText weight="font-semibold" className="mb-1 text-lg">
          Add experience
        </SimpleText>
        <SimpleText className="text-sm" color="text-tertiary-600">
          Share where you’ve worked on your profile.
        </SimpleText>
      </div>
      <div className="flex gap-3 px-6 pb-6 pt-8">
        <AriaButton className="w-full" variant="outlined" leftIcon={<SaveIcon />}>
          Save as draft
        </AriaButton>
        <AriaButton className="w-full">Add experience</AriaButton>
      </div>
    </AriaModal>
  );
}
