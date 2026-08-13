"use client";

import { useEffect, useState } from "react";

// Threshold in px past which the header contracts into the floating shell.
const SCROLL_THRESHOLD = 8;

export const useScrollState = (): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // No rAF throttle: this only ever sets a boolean, and React bails out of
    // re-rendering when the value is unchanged — so the throttle would only
    // be skipping a scrollY read and a boolean compare.
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      return window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrolled;
};
