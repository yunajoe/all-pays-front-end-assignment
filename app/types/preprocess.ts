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

export type TopRankStackChartFormat = Record<
  string,
  {
    totalAmount: number;
  }
>;

export interface MerchantInfoBase {
  mchtCode: string;
  totalAmount: number;
  transCount: number;
}

export interface MerchantInfo extends MerchantInfoBase {
  mchtName?: string;
  bizType?: string;
  status?: string;
}

export interface MerchantInfoMap {
  [key: string]: MerchantInfo;
}
