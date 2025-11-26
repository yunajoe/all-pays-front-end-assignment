import { PaymentResult } from "@/app/types/preprocess";
import { PAYMENT_METHOD_TABLE_TITLES } from "../../utils/const";
import styles from "./payment-method-table.module.css";
interface PaymentMethodTableProps {
  data: PaymentResult[];
}

function PaymentMethodTable({ data }: PaymentMethodTableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.tHead}>
        <tr>
          {PAYMENT_METHOD_TABLE_TITLES.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {data.map((item, index) => {
          const { payType, success, fail, successAmount, successRate } = item;
          return (
            <tr key={index}>
              <td>{payType}</td>
              <td>{success}</td>
              <td>{fail}</td>
              <td>{successAmount.toLocaleString()} KRW</td>
              <td>{successRate}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PaymentMethodTable;
