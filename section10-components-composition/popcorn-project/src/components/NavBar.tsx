import type { ReactNode } from "react";

type Props = {
  children: ReactNode
};

function NavBar({ children }: Props) {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
}

export default NavBar;
