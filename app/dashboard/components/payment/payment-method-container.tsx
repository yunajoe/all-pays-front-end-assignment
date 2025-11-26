"use client";

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
import styles from "./payment-method-container.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function PaymentMethodContainer() {
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

  const data = {
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
      <table className={styles.table}>
        <thead className={styles.tHead}>
          <tr>
            <th>결제 수단</th>
            <th>성공 건수</th>
            <th>실패 건수</th>
            <th>총 금액</th>
            <th>성공률</th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr>
            <td>ONLINE</td>
            <td>1</td>
            <td>2</td>
            <td>1000</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>DEVICE</td>
            <td>1</td>
            <td>2</td>
            <td>1000</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>MOBILE</td>
            <td>1</td>
            <td>2</td>
            <td>1000</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>VACT</td>
            <td>1</td>
            <td>2</td>
            <td>1000</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>BILING</td>
            <td>1</td>
            <td>2</td>
            <td>1000</td>
            <td>80%</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3 className={styles.subTitle}>결제 수단별 금액 비교 (단위:천원)</h3>
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
}

export default PaymentMethodContainer;
