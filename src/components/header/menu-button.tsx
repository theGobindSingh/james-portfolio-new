import { MenuIcon, XIcon } from "lucide-react";

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const MenuButton = ({ open, onClick, buttonRef }: MenuButtonProps) => {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="primary-nav"
      className="flex size-8 items-center justify-center lg:hidden"
    >
      {open ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
    </button>
  );
};

export default MenuButton;
