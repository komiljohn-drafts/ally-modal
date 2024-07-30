"use client";

import React from "react";

import AriaButton from "@/components/ui/button";
import { useModalStore } from "@/store/useModalStore";
import { Modals } from "@/utils/modals";

import ExperienceModal from "./ExperienceModal";

export default function HomePage() {
  const { setActiveModal } = useModalStore();

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <AriaButton onPress={() => setActiveModal(Modals.EXPERIENCE_MODAL)}>Open super modal</AriaButton>
      <ExperienceModal />
    </main>
  );
}
