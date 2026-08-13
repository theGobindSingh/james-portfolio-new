import Link from "@components/link";
import { Fragment } from "react";
import type { NavItem } from "./types";

const NAV_ITEMS: NavItem[] = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

// One delay step per item (75ms apart) — static since the item count is
// fixed, so no per-render JS is needed to compute them.
const ITEM_DELAY = ["delay-0", "delay-75", "delay-150"];
const RESUME_DELAY = "delay-[225ms]";

const mapper = (item: (typeof NAV_ITEMS)[number], index: number) => {
  return (
    <Fragment key={item.href}>
      <li className={`header-nav-item ${ITEM_DELAY[index]}`}>
        <Link
          href={item.href}
          variant="text"
          colorWeight={700}
          className="block px-4 py-1"
        >
          {item.label}
        </Link>
      </li>
      {index < NAV_ITEMS.length - 1 && (
        <li
          aria-hidden="true"
          className="hidden text-(--color-text-subtle) select-none lg:block"
        >
          |
        </li>
      )}
    </Fragment>
  );
};

// Static server markup: the open/close motion (header-nav / header-nav-item
// in header.css) reacts to the ancestor header's data-open attribute, so
// this needs no client JS of its own — see menu-controller.tsx for state.
const PrimaryNav = () => {
  return (
    <nav id="primary-nav" aria-label="primary" className="header-nav">
      <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-4">
        {NAV_ITEMS.map(mapper)}
      </ul>
      <span className={`header-nav-item ${RESUME_DELAY}`}>
        <Link
          href="/resume"
          variant="outlined"
          size="sm"
          color="accent"
          className="mt-4 lg:mt-0 lg:ml-2"
        >
          RESUME
        </Link>
      </span>
    </nav>
  );
};

export default PrimaryNav;
