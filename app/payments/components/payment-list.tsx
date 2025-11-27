"use client";
import { Payment } from "@/app/types/payment";
import { useState } from "react";
import { convertDateFromISO } from "../utils";
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
            const {
              paymentCode,
              mchtCode,
              amount,
              payType,
              status,
              paymentAt,
            } = item;
            return (
              <div key={index} className={styles.card}>
                <h3>결제 코드: {paymentCode}</h3>
                <p>결제 금액: {amount}</p>
                <p>결제 수단 : {payType}</p>
                <p>결제 상태: {status}</p>
                <p>결제 날짜: {convertDateFromISO(paymentAt)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PaymentList;
