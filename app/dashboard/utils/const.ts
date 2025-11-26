export const KPI_CHART_DATA = (
  success: number,
  fail: number,
  pending: number,
  cancel: number
) => {
  return {
    labels: ["결제 완료", "결제 실패", "결제 대기", "환불 완료"],
    datasets: [
      {
        label: "거래 내역 현황",
        data: [success, fail, pending, cancel],
        backgroundColor: ["#42b411ff", "#a11010ff", "#19284dff", "#a16410ff"],
      },
    ],
  };
};

export const PAYMENT_METHOD_CHART_DATA = (
  success: number,
  fail: number,
  pending: number,
  cancel: number
) => {
  return {
    labels: ["ONLINE", "DEVICE", "MOBILE", "VACT", "BILLING"],
    datasets: [
      {
        label: "거래 내역 현황",
        data: [success, fail, pending, cancel],
        backgroundColor: [
          "#42b411ff",
          "#672b9fff",
          "#dd4a2dff",
          "#a16410ff",
          "#302f2eff",
        ],
      },
    ],
  };
};
