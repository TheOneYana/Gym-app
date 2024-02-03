import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
// tsrafce - shortcut
type Props = {};

const Navbar = (props: Props) => {
  // to create space between to elements to get one to the left side and another one to the right side
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full`}></div>
    </nav>
  );
};

export default Navbar;
