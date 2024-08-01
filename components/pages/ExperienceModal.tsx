"use client";

import React from "react";

import { FlagSvg, RoundedLinesBgSvg, SaveIcon } from "@/public/icons";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/modals";

import AriaButton from "../ui/aria-button";
import AriaModal from "../ui/aria-modal";
import EmblaCarousel from "../ui/carousel";
import { SimpleText } from "../ui/typography";
import ExperienceModalFormElements from "./ExperienceModalFormElements";
import ExperienceModalFormWrapper from "./ExperienceModalFormWrapper";

export default function ExperienceModal() {
  const { activeModal, closeModal } = useModalStore();
  const isOpen = activeModal === Modals.EXPERIENCE_MODAL;

  return (
    <AriaModal isOpen={isOpen} onClose={closeModal} className="overflow-hidden relative">
      <RoundedLinesBgSvg className="absolute top-0 left-0 z-0 hidden md:inline" />
      <ExperienceModalFormWrapper>
        <div className="border border-border-secondary p-[11px] mt-6 ml-6 w-fit rounded-lg shadow-icon-bottom-shadow h-12 md:block hidden">
          <FlagSvg />
        </div>
        <div className="sm:py-4 py-5 text-lg relative z-10">
          <div className="md:px-6 px-4">
            <SimpleText weight="font-semibold" className="mb-1 text-lg">
              Add experience
            </SimpleText>
            <SimpleText className="text-sm mb-5" color="text-tertiary-600">
              Share where you've worked on your profile.
            </SimpleText>
          </div>
          <EmblaCarousel className="max-sm:block hidden">
            <ExperienceModalFormElements />
          </EmblaCarousel>
          <ExperienceModalFormElements className="sm:block hidden" />
        </div>
        <div className="flex gap-3 px-6 pb-6 md:pt-4 pt-1 sm:flex-row flex-col">
          <AriaButton className="w-full" variant="outlined" onPress={closeModal}>
            Cancel
          </AriaButton>
          <AriaButton className="w-full" type="submit" leftIcon={<SaveIcon />}>
            Add experience
          </AriaButton>
        </div>
      </ExperienceModalFormWrapper>
    </AriaModal>
  );
}
