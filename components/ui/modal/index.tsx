"use client";

import "./style.css";

import React, { ReactNode } from "react";
import { Dialog, Modal, ModalOverlayProps } from "react-aria-components";

import { CloseSvg } from "@/public/icons";

import AriaButton from "../button";

interface Props extends ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function AriaModal({ isOpen, onClose, children }: Props) {
  return (
    <Modal
      isDismissable
      className="relative w-[640px] bg-white rounded-xl outline-none overflow-hidden"
      isOpen={isOpen}
      onOpenChange={onClose}
    >
      <AriaButton
        variant="ghost"
        onPress={onClose}
        className="absolute md:top-[26px] md:right-[26px] top-4 right-4 !stroke-fg-disabled z-20"
      >
        <CloseSvg />
      </AriaButton>
      <Dialog className="outline-none">{children}</Dialog>
    </Modal>
  );
}
