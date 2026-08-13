import MenuController from "./menu-controller";
import NavDots from "./nav-dots";
import PrimaryNav from "./primary-nav";
import SkipLink from "./skip-link";

// Server component: no state lives here. MenuController is the one client
// leaf; NavDots/PrimaryNav/SkipLink are static markup handed down to it.
const Header = () => {
  return (
    <>
      <SkipLink />
      <MenuController dots={<NavDots />} nav={<PrimaryNav />} />
    </>
  );
};

export default Header;
