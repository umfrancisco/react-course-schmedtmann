import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";
import type { RootState } from "../../store";

function Username() {
  const username = useSelector<RootState, string>(getUsername);

  if (!username) {
    return null;
  }

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
