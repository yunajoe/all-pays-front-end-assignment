import { Payment } from "@/app/types/payment";
import { PaymentResult } from "@/app/types/preprocess";

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

const calculatePaymentMethod = (data: Payment[]) => {
  const online = data.filter((value) => value.payType === "ONLINE");
  const device = data.filter((value) => value.payType === "DEVICE");
  const mobile = data.filter((value) => value.payType === "MOBILE");
  const vact = data.filter((value) => value.payType === "VACT");
  const billing = data.filter((value) => value.payType === "BILLING");
  return {
    online,
    device,
    mobile,
    vact,
    billing,
  };
};

const calculatePaymentMethodSuccess = (data: Payment[]) => {
  return data.filter((value) => value.status === "SUCCESS");
};

const calculatePaymentMethodFail = (data: Payment[]) => {
  return data.filter((value) => value.status === "FAILED");
};

const calculatePaymentAmount = (data: Payment[]) => {
  return data.reduce((acc, value) => {
    acc += Number(value.amount);
    return acc;
  }, 0);
};

export const calculatePaymentMethodTableData = (data: Payment[]) => {
  const { online, device, mobile, vact, billing } =
    calculatePaymentMethod(data);

  return [online, device, mobile, vact, billing].reduce((acc, value) => {
    const payType = value.map((item) => {
      return item.payType;
    })[0];
    const success = calculatePaymentMethodSuccess(value);
    const fail = calculatePaymentMethodFail(value);
    const amount = calculatePaymentAmount(success);
    const successRate = success.length;
    const newObject = {
      payType,
      success: success.length,
      fail: fail.length,
      amount: amount.toLocaleString(),
      successRate,
    };
    acc = [...acc, newObject];
    return acc;
  }, [] as PaymentResult[]);
};
