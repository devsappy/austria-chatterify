"use client";

import dynamic from "next/dynamic";

const HeroLaptop = dynamic(() => import("./HeroLaptop"), {
  ssr: false,
  loading: () => <div className="aspect-square w-full" />,
});

export default function HeroLaptopMount() {
  return <HeroLaptop />;
}
