import { tw } from "@utils/tailwind";

// The site's one signature mark: 4 flat CMYK dots. Reused wherever the mark
// appears (not just the header) — see --color-dot-* in globals.css.
// Live Dot Rule (DESIGN.md): exactly one dot (accent/yellow) ambient-pulses.
const DOTS = [
  { key: "header-dot-k", colorVar: "--color-dot-k", live: false },
  { key: "header-dot-y", colorVar: "--color-dot-y", live: false },
  { key: "header-dot-m", colorVar: "--color-dot-m", live: false },
  { key: "header-dot-c", colorVar: "--color-dot-c", live: false },
] as const;

const mapper = ({ key, colorVar, live }: (typeof DOTS)[number]) => {
  return (
    <div
      key={key}
      style={{ backgroundColor: `var(${colorVar})` }}
      className={tw`
            size-2.5 cursor-pointer
            rounded-full transition-all duration-300
            ease-out hover:scale-125
            motion-reduce:transition-none
            motion-reduce:hover:scale-100
            ${live && "motion-safe:animate-pulse"}
          `}
    />
  );
};

const NavDots = () => {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      {DOTS.map(mapper)}
    </span>
  );
};

export default NavDots;
