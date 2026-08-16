const renderChars = (word: string, key: string) => {
  return word.split("").map((char, index) => {
    if (char === " ") {
      return <div key={`${key}-${index}`} className="w-[0.3em]" />;
    }
    return (
      <div key={`${key}-${index}`} className="char-container">
        <div className="char char-top">{char}</div>
        <div className="char char-bottom">{char}</div>
      </div>
    );
  });
};

const Title = () => {
  return (
    <div className="relative flex flex-col gap-2">
      <h2 className="sr-only">Live by design</h2>
      <div aria-hidden="true" className="flex flex-col gap-2">
        <div className="flex">{renderChars("LIVE BY", "upper")}</div>
        <div className="flex pl-[calc(4ch-1.5px)]">
          {renderChars("DESIGN", "lower")}
        </div>
      </div>
      <div className="dot-column" aria-hidden="true">
        <div className="dot bg-(--color-dot-c)" />
        <div className="dot bg-(--color-dot-m)" />
        <div className="dot bg-(--color-dot-y)" />
        <div className="dot bg-(--color-dot-k)" />
      </div>
    </div>
  );
};

export default Title;
