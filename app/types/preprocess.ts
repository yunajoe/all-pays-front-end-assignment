export type PaymentResult = {
  payType: string;
  success: number;
  fail: number;
  successAmount: number;
  failAmount: number;
  successRate: number;
};

export type StackChartFormat = Record<
  string,
  {
    success: number;
    fail: number;
    successAmount: number;
    failAmount: number;
  }
>;

export interface MerchantInfoBase {
  mchtCode: string;
  totalAmount: number;
}

interface MerchantInfo extends MerchantInfoBase {
  mchtName?: string;
  bizType?: string;
  status?: string;
}

export interface MerchantInfoMap {
  [key: string]: MerchantInfo;
}
