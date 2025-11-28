"use client";
import ModalBackground from "@/app/components/modal/modal-background";
import { usePaymentFilterModalStore } from "@/app/store/payment-filter-modal";
import { Payment } from "@/app/types/payment";
import { useState } from "react";
import { convertDateFromISO } from "../utils";
import PaymentFilter from "./payment-filter";
import styles from "./payment-list.module.css";
interface PaymentListProps {
  data: Payment[];
}
function PaymentList({ data }: PaymentListProps) {
  const [paymentsData, setPaymentsData] = useState(data);
  const { isFilterModalOpen, handleFilterModalOpen } =
    usePaymentFilterModalStore();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>거래 내역 리스트 목록</h2>
          <button
            onClick={handleFilterModalOpen}
            className={styles.filterButton}
          >
            상세 필터
          </button>
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

      {isFilterModalOpen && (
        <ModalBackground>
          <PaymentFilter
            originalData={data}
            paymentsData={paymentsData}
            setPaymentsData={setPaymentsData}
          />
        </ModalBackground>
      )}
    </>
  );
}

export default PaymentList;
