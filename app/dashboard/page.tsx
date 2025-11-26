import { getPaymentsListUrl } from "../api/payments";
import KpiContainer from "./components/kpi/kpi-container";
import PaymentMethodContainer from "./components/payment/payment-method-container";
import styles from "./dashboard.module.css";

async function getPayments() {
  const response = await fetch(getPaymentsListUrl);
  if (!response.ok) {
    throw new Error("[Error] 가맹점 상세 정보를 불러올 수 없습니다.");
  }
  return response.json();
}

async function DashBoardPage() {
  const payments = await getPayments();
  const data = payments.data;
  return (
    <div className={styles.container}>
      <KpiContainer data={data} />

      <PaymentMethodContainer />

      {/* 2. Top 5 가맹점   */}
      <div className={styles.merchantContainer}></div>
    </div>
  );
}

export default DashBoardPage;
