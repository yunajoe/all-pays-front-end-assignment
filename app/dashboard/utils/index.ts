import { MerchantListItem } from "@/app/types/merchants";
import { Payment } from "@/app/types/payment";
import {
  MerchantInfo,
  MerchantInfoMap,
  PaymentResult,
} from "@/app/types/preprocess";
import { StackChartFormat } from "./../../types/preprocess";

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

export const calculatePaymentMethod = (data: Payment[]) => {
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
    const successAmount = calculatePaymentAmount(success);
    const failAmount = calculatePaymentAmount(fail);
    const successRate = success.length;
    const newObject = {
      payType,
      success: success.length,
      fail: fail.length,
      successAmount,
      failAmount,
      successRate,
    };
    acc = [...acc, newObject];
    return acc;
  }, [] as PaymentResult[]);
};

export const calculatePaymentMethodStackBarData = (data: PaymentResult[]) => {
  const newObject: StackChartFormat = {};
  data.forEach((item) => {
    const { payType, success, fail, successAmount, failAmount } = item;
    newObject[payType] = { success, fail, successAmount, failAmount };
  });
  return newObject;
};

export const calculatePaymentMethodPieData = (data: Payment[]) => {
  const { online, device, mobile, vact, billing } =
    calculatePaymentMethod(data);
  return {
    online: online.length,
    device: device.length,
    mobile: mobile.length,
    vact: vact.length,
    billing: billing.length,
  };
};

const matchWithMchtCode = (
  merchantInfoBase: MerchantInfoMap,
  merchantsDetailInfo: MerchantListItem[]
) => {
  const merchantInfo = { ...merchantInfoBase };
  merchantsDetailInfo.forEach((item) => {
    const { mchtCode, mchtName, bizType, status } = item;
    if (merchantInfo[mchtCode]) {
      merchantInfo[mchtCode] = {
        ...merchantInfo[mchtCode],
        mchtName,
        bizType,
        status,
      };
    }
  });
  return merchantInfo;
};

export const calculateMerchandisesStackBarData = (
  paymentsInfo: Payment[],
  merchantsDetailInfo: MerchantListItem[]
) => {
  const successTransactionData = calculatePaymentMethodSuccess(paymentsInfo);
  const merchantInfoBase: MerchantInfoMap = {};

  successTransactionData.forEach((item) => {
    const { mchtCode, amount } = item;
    const numAmount = parseFloat(amount);
    if (!merchantInfoBase[mchtCode]) {
      merchantInfoBase[mchtCode] = {
        mchtCode,
        totalAmount: numAmount,
        transCount: 1,
      };
    } else {
      const total = merchantInfoBase[mchtCode].totalAmount;
      const count = merchantInfoBase[mchtCode].transCount;
      merchantInfoBase[mchtCode] = {
        ...merchantInfoBase[mchtCode],
        totalAmount: total + numAmount,
        transCount: count + 1,
      };
    }
  });

  return matchWithMchtCode(merchantInfoBase, merchantsDetailInfo);
};

const sortedDescendingByTotalAmount = (data: MerchantInfo[]) => {
  return data.toSorted((a, b) => b.totalAmount - a.totalAmount);
};

const topNData = (data: MerchantInfo[], n: number) => {
  return data.slice(0, n);
};

export const getTopNByTotalAmount = (data: MerchantInfo[], n: number) => {
  const sorted = sortedDescendingByTotalAmount(data);
  return topNData(sorted, n);
};
