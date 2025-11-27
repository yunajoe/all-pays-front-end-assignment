import { create } from "zustand";

type PaymentFilterModalStore = {
  isFilterModalOpen: boolean;
  handleFilterModalOpen: () => void;
  handleFilterModalClose: () => void;
};

export const usePaymentFilterModalStore = create<PaymentFilterModalStore>(
  (set, get) => ({
    isFilterModalOpen: false,
    handleFilterModalOpen: () => set({ isFilterModalOpen: true }),
    handleFilterModalClose: () => set({ isFilterModalOpen: false }),
  })
);
