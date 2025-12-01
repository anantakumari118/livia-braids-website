import React from "react";
import { galleryItems } from "../data/content";

const GalleryGrid: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {galleryItems.map((item, index) => {
        const styleNumber = String(index + 1).padStart(2, "0");

        return (
          <figure
            key={item.id}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/70 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[3/4] w-full">
              <img
                src={item.image}
                alt={`Braid style ${styleNumber}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom strip with style number */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-10 flex items-end justify-between text-[11px]">
              <div className="flex items-center gap-1 text-pink-100">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 backdrop-blur text-[10px]">
                  #{styleNumber}
                </span>
                <span className="hidden sm:inline">
                  Mention “Style {styleNumber}” when you book.
                </span>
              </div>
              <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-white/15 backdrop-blur text-[10px] text-white">
                Save for inspo ✨
              </span>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
