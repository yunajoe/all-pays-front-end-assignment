import { StackChartFormat } from "@/app/types/preprocess";

export const PAYMENT_METHOD_TABLE_TITLES = [
  "결제 수단",
  "성공 건수",
  "실패 건수",
  "결제 금액",
  "성공률",
];

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
export const PAYMENT_METHOD_STACK_BAR_DATA = (data: StackChartFormat) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ["ONLINE", "DEVICE", "MOBILE", "VACT", "BILLING"];

  const result = {
    labels,
    datasets: [
      {
        label: "결제 성공",
        data: labels.map((label) => data[label].successAmount),
        backgroundColor: "rgb(16, 185, 129)",
      },
      {
        label: "결제 실패",
        data: labels.map((label) => data[label].failAmount),
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return { options, result };
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
