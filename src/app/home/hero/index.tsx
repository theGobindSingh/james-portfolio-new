import FullWidthWrapper from "@components/full-width-wrapper";
import Link from "@components/link";

// Local to this component only (not globals.css): the name's closing dot cycles
// through the four process-ink vars, print registration marks rotating through a run.
// The mobile media query gives the stacked two-line name more size (room freed up
// by the wrap) and a looser line-height, since --leading-display is tuned for a
// single line and otherwise collides "James" and "Loder" together.
const heroStyle = `
  @keyframes hero-dot-cycle {
    0%, 100% { color: var(--color-dot-c); }
    25% { color: var(--color-dot-m); }
    50% { color: var(--color-dot-y); }
    75% { color: var(--color-dot-k); }
  }
  @media (max-width: 639px) {
    .hero-name {
      font-size: clamp(3.5rem, 22vw, 6rem);
      line-height: 1.05;
    }
  }
`;

const HomeHeroSection = () => {
  return (
    <FullWidthWrapper className="flex min-h-screen flex-col items-center pt-(--header-height) lg:h-screen lg:justify-center lg:pt-0">
      <style>{heroStyle}</style>
      <div className="pt-12 text-center lg:pt-0">
        <p className="mb-6 font-mono text-(length:--fs-3xs) tracking-wide text-(--color-text-muted) uppercase">
          {`Art Director & Brand Manager`}
        </p>
        <h1 className="hero-name font-display text-(length:--fs-display-hero) leading-(--leading-display) tracking-(--tracking-display)">
          James <br className="sm:hidden" />
          Loder
          <span className="animate-[hero-dot-cycle_8s_linear_infinite]">.</span>
        </h1>
        <p className="mt-6 font-serif text-(length:--fs-m) italic text-(--color-text-muted)">
          I build creative systems that stay coherent under pressure.
        </p>
      </div>
      <p className="mx-auto mt-16 max-w-[65ch] text-center text-(length:--fs-s) text-(--color-text-muted)">
        I work close to the brand, turning strategy into systems other people
        can run — guidelines, templates, and review structures that hold up once
        I&apos;m not in the room.
      </p>
      <Link href="/work" variant="outlined" size="md" className="mt-8">
        See the work
      </Link>
    </FullWidthWrapper>
  );
};

export default HomeHeroSection;
