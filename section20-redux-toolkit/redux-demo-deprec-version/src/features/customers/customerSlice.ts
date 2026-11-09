import type { CustomerState, PayloadAction } from "../../types";

const initialStateCustomer: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action: PayloadAction) {
  switch (action.type) {
    case "customer/create":
      return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName: string, nationalID: string) {
  const type: "customer/create" = "customer/create";
  const payload = { fullName, nationalID, createdAt: new Date().toISOString() };
  return { type: type, payload: payload };
}

export function updateName(fullName: string) {
  const type: "customer/updateName" = "customer/updateName";
  return { type: type, payload: fullName };
}