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
import { Bar, Pie } from "react-chartjs-2";
import {
  calculatePaymentMethodPieData,
  calculatePaymentMethodStackBarData,
  calculatePaymentMethodTableData,
} from "../../utils";
import {
  PAYMENT_METHOD_PIE_DATA,
  PAYMENT_METHOD_STACK_BAR_DATA,
} from "../../utils/const";
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
  const tableData = calculatePaymentMethodTableData(data);
  const stackBarData = calculatePaymentMethodStackBarData(tableData);
  const { options, result } = PAYMENT_METHOD_STACK_BAR_DATA(stackBarData);
  const { online, device, mobile, vact, billing } =
    calculatePaymentMethodPieData(data);
  const pieData = PAYMENT_METHOD_PIE_DATA(
    online,
    device,
    mobile,
    vact,
    billing
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>결제 수단 분석</h3>
      <PaymentMethodTable data={tableData} />
      <div>
        <h3 className={styles.subTitle}>결제 수단별 금액 비교 (단위:천원)</h3>
        <Bar options={options} data={result} />;
      </div>
      <div>
        <h3 className={styles.subTitle}>결제 수단별 비율</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default PaymentMethodContainer;
