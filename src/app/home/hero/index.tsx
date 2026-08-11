import FullWidthWrapper from "@components/full-width-wrapper";

const HomeHeroSection = () => {
  return (
    <FullWidthWrapper className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-(length:--fs-display-hero) leading-(--leading-display) tracking-(--tracking-display)">
          <span>James Loader</span>
          <span>.</span>
          <div className="sr-only">
            I build creative systems that stay coherent under pressure.
          </div>
        </h1>
        <p className="mt-6 font-mono text-(length:--fs-3xs) tracking-wide text-(--color-text-muted) uppercase">
          {`Art Director & Brand Manager`}
        </p>
      </div>
      <p className="mx-auto mt-16 max-w-[65ch] text-center text-(length:--fs-s) text-(--color-text-muted)">
        I work close to the brand, turning strategy into systems other people
        can run — guidelines, templates, and review structures that hold up once
        I&apos;m not in the room.
      </p>
    </FullWidthWrapper>
  );
};

export default HomeHeroSection;
