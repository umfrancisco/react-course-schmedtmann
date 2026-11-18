import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { create } from "./customerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    if (!fullName || !nationalID) {
      return;
    }
    const createdAt = new Date().toISOString();
    const payload = { fullName, nationalID, createdAt };
    dispatch(create(payload));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default CreateCustomer;
