"use client";

import Image from "next/image";
import img1 from "@/img/1.jpeg";
import img2 from "@/img/2.jpeg";
import img3 from "@/img/3.jpeg";
import img4 from "@/img/4.jpeg";
import img5 from "@/img/5.jpeg";
import { WheelEvent } from "react";

export default function Page() {
  const imgs = [img1, img2, img3, img4, img5];

  function handleScroll(e: WheelEvent<HTMLDivElement>) {
    const container = e.currentTarget;
    const scrollAmount = e.deltaY;

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <div
      onWheel={(e) => handleScroll(e)}
      className="fixed bottom-0 inset-x-0 max-w-[90%] mx-auto pt-20 overflow-x-scroll no-scrollbar"
    >
      <div className="flex items-end gap-10 flex-col md:flex-row">
        {imgs.map((im, i) => (
          <div
            key={`img-${i}`}
            className="card-container relative rounded-xl overflow-hidden min-w-72 max-w-72 bg-white border hover:pb-10"
          >
            <div className="card-bg bg-gray-100 inset-0 top-[100%] -bottom-10 absolute"></div>

            <div className="relative h-56 bg-gray-200">
              <Image
                src={im}
                alt={`Profile ${i}`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="p-10 relative z-10">
              <p className="font-bold text-3xl mb-4">Lorem ipsum dolor sit.</p>

              <p className="text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis, iusto.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
