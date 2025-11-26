"use client";

import { Payment } from "@/app/types/payment";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { calculatePaymentMethodTableData } from "../../utils";
import PaymentMethodTable from "../table/payment-method-table";
import styles from "./payment-method-container.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PaymentMethodContainerProps {
  data: Payment[];
}

function PaymentMethodContainer({ data }: PaymentMethodContainerProps) {
  calculatePaymentMethodTableData(data);
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => 1),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => {
          return 1;
        }),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => 1),

        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>결제 수단 분석</h3>
      <PaymentMethodTable data={data} />
      <div>
        <h3 className={styles.subTitle}>결제 수단별 금액 비교 (단위:천원)</h3>
        <Bar options={options} data={data2} />;
      </div>
      <div>
        <h3 className={styles.subTitle}>결제 수단별 비율</h3>
        {/* <Pie data={chartData} /> */}
      </div>
    </div>
  );
}

export default PaymentMethodContainer;
