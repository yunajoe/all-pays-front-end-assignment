import { Payment } from "@/app/types/payment";
import { calculatePaymentMethodTableData } from "../../utils";
import styles from "./payment-method-table.module.css";
interface PaymentMethodTableProps {
  data: Payment[];
}

function PaymentMethodTable({ data }: PaymentMethodTableProps) {
  const titles = ["결제 수단", "성공 건수", "실패 건수", "결제 금액", "성공률"];
  const result = calculatePaymentMethodTableData(data);

  return (
    <table className={styles.table}>
      <thead className={styles.tHead}>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {result.map((item, index) => {
          const { payType, success, fail, amount, successRate } = item;
          return (
            <tr key={index}>
              <td>{payType}</td>
              <td>{success}</td>
              <td>{fail}</td>
              <td>{amount} KRW</td>
              <td>{successRate}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PaymentMethodTable;
