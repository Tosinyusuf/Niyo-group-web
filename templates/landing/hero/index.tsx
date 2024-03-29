"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Button2 } from "@/components";

function HeroSection() {
  return (
    <div className="relative h-[100vh]">
      <Spline scene="https://prod.spline.design/c2nECsws6qjdMl6l/scene.splinecode" />
      <div className="absolute bottom-0 w-full ">
        <div
          className="flex-row flex justify-center gap-6 opacity-0"
          data-animation="h"
        >
          <Button2
            rounded
            className=" !bg-rdr-pink-500 text-black"
            label="Niyo Hair & Beauty"
            size="lg"
            iconRight={{
              set: "icon",
              name: "ph:arrow-line-up-right",
              size: "32px",
              style: {
                backgroundColor: "#fff",
                borderRadius: "100px",
                padding: "5px",
              },
            }}
          />
          <Button2
            label="NiyoLabs"
            rounded
            className=" !bg-gd-lemon-400 text-black"
            size="lg"
            iconRight={{
              set: "icon",
              name: "ph:arrow-line-up-right",
              size: "32px",
              color: "#fff",
              style: {
                backgroundColor: "#000",
                borderRadius: "100px",
                padding: "5px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
