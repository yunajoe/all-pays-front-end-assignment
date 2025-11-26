import { Payment } from "@/app/types/payment";

export const calculatePaymentRate = (data: Payment[]) => {
  const successStatus = data.filter((value) => value.status === "SUCCESS");
  const pendingStatus = data.filter((value) => value.status === "PENDING");
  const cancelStatus = data.filter((value) => value.status === "CANCELLED");
  const failStatus = data.filter((value) => value.status === "FAILED");

  return {
    success: successStatus.length,
    pending: pendingStatus.length,
    cancel: cancelStatus.length,
    fail: failStatus.length,
  };
};

export const calculateSuccessPaymentMoney = (data: Payment[]) => {
  const result = data
    .filter((value) => value.status === "SUCCESS")
    .reduce((acc, value) => {
      const amount = Number(value.amount);
      acc += amount;
      return acc;
    }, 0);
  return result.toLocaleString();
};

export const calculateFailPaymentMoney = (data: Payment[]) => {
  const result = data
    .filter((value) => value.status === "FAILED")
    .reduce((acc, value) => {
      const amount = Number(value.amount);
      acc += amount;
      return acc;
    }, 0);
  return result.toLocaleString();
};
