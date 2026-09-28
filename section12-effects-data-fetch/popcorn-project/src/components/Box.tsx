import { useState, type ReactNode } from "react";
import ToggleButton from "./ToggleButton";

type Props = {
  children: ReactNode;
};

function Box({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}

export default Box;
