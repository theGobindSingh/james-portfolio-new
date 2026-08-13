"use client";

import { usePathname } from "next/navigation";
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface MenuState {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export const useMenuState = (): MenuState => {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // The header persists across route changes (it lives in the root layout),
  // so a link click alone won't unmount/reset it — close on navigation
  // instead of wiring an onClick into every nav link.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ponytail: focus-on-open + Escape + route-change close is "sensible"
  // focus handling, not a full tab-trap loop. Upgrade to a native <dialog>
  // or a real focus trap if strict modal-dialog compliance is needed later.
  useEffect(() => {
    if (!open) return;
    // preventScroll is load-bearing: at this instant header-shell is still
    // collapsed (~71px, overflow: hidden) and this link sits well below its
    // clip box. overflow: hidden is still programmatically scrollable, so a
    // plain focus() makes the browser scroll the shell ~58px to reveal the
    // link — yanking the dots/hamburger row up out of view for ~3 frames
    // until the height transition grows past it and the scroll resets.
    document
      .getElementById("primary-nav")
      ?.querySelector("a")
      ?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return { open, setOpen, menuButtonRef };
};
