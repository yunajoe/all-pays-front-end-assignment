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
