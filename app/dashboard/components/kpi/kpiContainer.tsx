import styles from "./kpiContainer.module.css";

function KpiContainer() {
  return (
    <div className={styles.kpiContainer}>
      <h2 className={styles.title}>KPIS</h2>
      <p>결제 현황 및 주요 지표를 확인</p>
      <div>
        <div>결제 성공률 도표</div>
        <div>결제 금액 표시 </div>
        <div>결제 실패율</div>
        <div>결제 취소율</div>
      </div>
    </div>
  );
}

export default KpiContainer;
