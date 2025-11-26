import { getPaymentsListUrl } from "../api/payments";
import KpiContainer from "./components/kpi/kpiContainer";
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
      {/* 1. KPIs / 핵심 지표  */}
      <KpiContainer data={data} />

      {/* 2. Top 5 가맹점   */}
      <div className={styles.merchantContainer}></div>

      {/* 결제 수단별  */}
      <div className={styles.paymentMethodContainer}></div>
    </div>
  );
}

export default DashBoardPage;
