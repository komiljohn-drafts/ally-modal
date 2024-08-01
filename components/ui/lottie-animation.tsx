"use client";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

import animationUrl from "@/utils/animationLottie.json";

export default function LottieAnimation() {
  return (
    <Player autoplay keepLastFrame src={animationUrl} style={{ height: "120px", width: "120px" }}>
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  );
}
