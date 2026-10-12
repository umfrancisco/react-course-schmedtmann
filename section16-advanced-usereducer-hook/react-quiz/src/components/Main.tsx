import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Main({ children }: Props) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default Main;