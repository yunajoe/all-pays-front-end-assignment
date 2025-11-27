import { MerchantListItem } from "@/app/types/merchants";
import { Payment } from "@/app/types/payment";
import { MerchantInfoMap, PaymentResult } from "@/app/types/preprocess";
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

// 2개의 아이템을 한다면은?

// 아래는 가메정 디테일 리스트
//  {
//     "mchtCode": "MCHT-CAFE-001",
//     "mchtName": "브런치커피 강남점",
//     "status": "ACTIVE",
//     "bizType": "CAFE",
//     "bizNo": "101-11-00001",
//     "address": "서울 강남구 테헤란로 100",
//     "phone": "02-111-0001",
//     "email": "gangnam@brunchcafe.com",
//     "registeredAt": "2025-10-01T00:00:00",
//     "updatedAt": "2025-10-01T00:00:00"
//   },

// 아래는 결제 리스트
// {
//   "paymentCode": "PAY-20251103-0004",
//   "mchtCode": "MCHT-MART-003",
//   "amount": "25000.00",
//   "currency": "KRW",
//   "payType": "DEVICE",
//   "status": "SUCCESS",
//   "paymentAt": "2025-11-03T02:00:00"
// },

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
      };
    } else {
      const total = merchantInfoBase[mchtCode].totalAmount;
      merchantInfoBase[mchtCode] = {
        ...merchantInfoBase[mchtCode],
        totalAmount: total + numAmount,
      };
    }
  });

  return matchWithMchtCode(merchantInfoBase, merchantsDetailInfo);
};
