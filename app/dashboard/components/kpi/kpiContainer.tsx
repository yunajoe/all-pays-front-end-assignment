"use client";
import { Payment } from "@/app/types/payment";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { CircleDollarSign } from "lucide-react";
import { Pie } from "react-chartjs-2";
import {
  calculateFailPaymentMoney,
  calculatePaymentRate,
  calculateSuccessPaymentMoney,
} from "../../utils";
import styles from "./kpiContainer.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

interface KpiContainerProps {
  data: Payment[];
}

function KpiContainer({ data }: KpiContainerProps) {
  const { success, pending, cancel, fail } = calculatePaymentRate(data);
  const successPaySum = calculateSuccessPaymentMoney(data);
  const failedPaySum = calculateFailPaymentMoney(data);
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
        {/* card1 */}
        <div className={styles.chart}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <p>결제 성공률</p>
              <h1 className={styles.title}>{success} %</h1>
            </div>
            <span>
              {success} 건/ {data.length} 건
            </span>
          </div>
          <Pie data={chartData} />
        </div>
        {/* card2 */}
        <div className={styles.chart}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <p>결제 금액</p>
              <h1 className={styles.title}>{successPaySum} KRW</h1>
              <span>성공 거래 합계</span>
            </div>
            <CircleDollarSign size={48} />
          </div>
        </div>

        <div className={styles.chart}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <p>결제 실패율</p>
              <h1 className={styles.title}>{fail} %</h1>
              <span>{failedPaySum} KRW</span>
            </div>
            <span>
              {fail} 건/ {data.length} 건
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KpiContainer;
