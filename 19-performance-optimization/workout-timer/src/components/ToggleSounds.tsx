import { memo } from "react";

type Props = {
  allowSound: boolean;
  setAllowSound: (val: boolean) => void;
}

function ToggleSounds({ allowSound, setAllowSound }: Props) {

  function handleAllowSound() {
    setAllowSound(!allowSound);
  }

  return (
    <button
      className="btn-sound"
      onClick={handleAllowSound}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
