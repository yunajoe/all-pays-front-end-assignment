import { create } from "zustand";

type PaymentFilterStore = {
  selectedPayTypes: string[];
  setSelectedPayTypes: (types: string[]) => void;

  selectedPayStatus: string[];
  setSelectedPayStatus: (types: string[]) => void;
};

export const usePaymentFilterStore = create<PaymentFilterStore>((set, get) => ({
  selectedPayTypes: [],
  setSelectedPayTypes: (types) => set({ selectedPayTypes: types }),

  selectedPayStatus: [],
  setSelectedPayStatus: (status) => set({ selectedPayStatus: status }),
}));
