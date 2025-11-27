"use client";
import { Payment } from "@/app/types/payment";
import { useState } from "react";
import styles from "./payment-list.module.css";
interface PaymentListProps {
  data: Payment[];
}
function PaymentList({ data }: PaymentListProps) {
  console.log("거래내역 데이터  ===>", data);
  const [paymentsData, setPaymentsData] = useState(data);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>거래 내역 리스트 목록</h2>
        <div className={styles.cardListContainer}>
          {paymentsData.map((item, index) => {
            const { paymentCode, mchtCode, amount, payType, status } = item;
            return (
              <div key={index} className={styles.card}>
                <h3>{mchtCode}</h3>
                <p>{amount}</p>
                <p>결제 수단 : {payType}</p>
                <p>{status}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PaymentList;
