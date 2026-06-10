"use client";

import Image from "next/image";
import { MouseEvent, useEffect, useId, useRef, useState } from "react";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}

export function ProductScreenshot({ src, alt, sizes, priority = false }: ProductScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeDialog = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label={`Open screenshot: ${alt}`}
        className="group relative block aspect-video w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
        />
      </button>

      {isOpen ? (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          className="fixed inset-0 m-0 flex h-full max-h-none w-full max-w-none items-center justify-center bg-transparent p-4 backdrop:bg-ink/85"
          onClick={closeOnBackdrop}
          onClose={() => setIsOpen(false)}
        >
          <div
            className="relative flex h-[min(80vh,900px)] w-[min(94vw,1440px)] items-center justify-center overflow-hidden rounded-3xl bg-white shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {alt}
            </p>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="94vw"
              priority
            />
            <button
              type="button"
              aria-label="Close screenshot"
              className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
