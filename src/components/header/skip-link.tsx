const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-(--z-nav) focus:rounded-sm focus:border focus:border-(--color-border-strong) focus:bg-(--color-bg) focus:px-4 focus:py-2 focus:text-(length:--fs-3xs) focus:outline-2 focus:outline-(--color-focus)"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;
