"use client";
import { Payment } from "@/app/types/payment";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { calculatePaymentRate } from "../../utils";
import styles from "./kpiContainer.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

interface KpiContainerProps {
  data: Payment[];
}

function KpiContainer({ data }: KpiContainerProps) {
  const { success, pending, cancel, fail } = calculatePaymentRate(data);
  const chartData = {
    labels: ["결제 완료", "결제 실패", "결제 대기", "환불 완료"],
    datasets: [
      {
        label: "거래 내역 현황",
        data: [success, fail, pending, cancel],
        backgroundColor: ["#42b411ff", "#a11010ff", "#19284dff", "#a16410ff"],
        hoverOffset: 10,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>KPIS</h2>
      <p>결제 현황 및 주요 지표를 확인</p>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <Pie data={chartData} />
        </div>
        <div className={styles.chart}>결제 금액 표시 </div>
        <div className={styles.chart}>결제 실패율</div>
      </div>
    </div>
  );
}

export default KpiContainer;
