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
