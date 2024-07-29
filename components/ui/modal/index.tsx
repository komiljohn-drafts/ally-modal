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
      className="relative w-[640px] bg-white rounded-xl outline-none overflow-hidden"
      isOpen={isOpen}
      onOpenChange={onClose}
    >
      <AriaButton variant="ghost" onPress={onClose} className="absolute top-[26px] right-[26px] !stroke-fg-disabled">
        <CloseSvg />
      </AriaButton>
      <Dialog className="outline-none">{children}</Dialog>
    </Modal>
  );
}
