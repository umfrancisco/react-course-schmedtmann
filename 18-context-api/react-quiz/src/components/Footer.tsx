import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

function Footer({ children }: Props) {
  return (
    <footer>
      {children}
    </footer>
  );
}

export default Footer;