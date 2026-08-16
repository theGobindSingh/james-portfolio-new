import Title from "@app/home/live-by-design/title";
import FullWidthWrapper from "@components/full-width-wrapper";

const LiveByDesignSection = () => {
  return (
    <FullWidthWrapper
      wrapperClassName="torn-sheet"
      className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-evenly"
    >
      <div className="font-poster text-(length:--fs-display-section) leading-(--leading-display) tracking-(--tracking-display)">
        <Title />
      </div>
      <p className="max-w-[36ch] text-(length:--fs-1xs) text-(--color-text-muted) lg:w-[min(42%,36ch)]">
        I build creative systems that stay coherent under pressure. The work
        blends strategic direction, identity governance, and operational design
        so teams can move faster without diluting brand quality.
      </p>
    </FullWidthWrapper>
  );
};

export default LiveByDesignSection;
