"use client";

import type { ReactNode } from "react";
import MenuButton from "./menu-button";
import { useMenuState } from "./use-menu-state";
import { useScrollState } from "./use-scroll-state";

interface MenuControllerProps {
  dots: ReactNode;
  nav: ReactNode;
}

// The header's only stateful piece: owns scroll + open state and exposes
// them as data-scrolled/data-open on the header element itself. `dots` and
// `nav` are pre-rendered server markup — their look reacts to those data
// attributes via the header-* utilities in header.css, so they ship no
// client JS of their own.
const MenuController = ({ dots, nav }: MenuControllerProps) => {
  const scrolled = useScrollState();
  const { open, setOpen, menuButtonRef } = useMenuState();

  return (
    <header
      className="header-wrapper w-full flex justify-center items-center"
      data-scrolled={String(scrolled)}
      data-open={String(open)}
    >
      <div className="header-shell">
        <div className="header-row">
          {dots}
          <MenuButton
            open={open}
            onClick={() => {
              setOpen((value) => {
                return !value;
              });
            }}
            buttonRef={menuButtonRef}
          />
        </div>
        {nav}
      </div>
    </header>
  );
};

export default MenuController;
