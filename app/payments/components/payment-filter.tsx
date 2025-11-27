"use client";
import { usePaymentFilterStore } from "@/app/store/payment-filter-store";
import { X } from "lucide-react";
import { payStatus, payTypes } from "../utils/const";
import styles from "./payment-filter.module.css";

function PaymentFilter() {
  const {
    selectedPayTypes,
    setSelectedPayTypes,
    selectedPayStatus,
    setSelectedPayStatus,
  } = usePaymentFilterStore();

  console.log(
    "selectedPayTYpes =>>",
    selectedPayTypes,
    "selectedPaySTatus ===>>",
    selectedPayStatus
  );
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>상세 필터</h2>
          <button className={styles.closeButton}>
            <X size={24} />
          </button>
        </div>

        {/* 결제 수단 */}
        <div className={styles.section}>
          <label className={styles.label}>결제 수단</label>
          <div className={styles.dropdown}>
            <div className={styles.grid}>
              {payTypes.map((type) => (
                <div
                  key={type}
                  className={`${styles.option} ${
                    selectedPayTypes.includes(type) ? styles.optionSelected : ""
                  }`}
                  onClick={() => {
                    if (selectedPayTypes.includes(type)) {
                      const filteredSelectedPayTypes = selectedPayTypes.filter(
                        (item) => item != type
                      );
                      setSelectedPayTypes(filteredSelectedPayTypes);
                    } else {
                      setSelectedPayTypes([...selectedPayTypes, type]);
                    }
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 결제 상태 */}
        <div className={styles.section}>
          <label className={styles.label}>결제 상태</label>
          <div className={styles.dropdownSmall}>
            <div className={styles.grid}>
              {payStatus.map((status) => (
                <div
                  key={status}
                  className={`${styles.option} ${
                    selectedPayStatus.includes(status)
                      ? styles.optionSelected
                      : ""
                  }`}
                  onClick={() => {
                    if (selectedPayStatus.includes(status)) {
                      const filteredSelectedPayStatus =
                        selectedPayStatus.filter((item) => item != status);
                      setSelectedPayStatus(filteredSelectedPayStatus);
                    } else {
                      setSelectedPayStatus([...selectedPayStatus, status]);
                    }
                  }}
                >
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 결제 금액 */}
        {/* <div className={styles.section}>
          <label className={styles.label}>결제 금액</label>
          <div className={styles.amountContainer}>
            <input
              type="number"
              placeholder="최소 금액"
              value={0}
              onChange={(e) => {}}
              className={styles.input}
            />
            <span className={styles.currency}>원</span>
            <span className={styles.separator}>~</span>
            <input
              type="number"
              placeholder="최대 금액"
              value={0}
              onChange={(e) => {}}
              className={styles.input}
            />
            <span className={styles.currency}>원</span>
          </div>
        </div> */}

        {/* 버튼 */}
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {}}
            className={styles.resetButton}
            type="button"
          >
            초기화
          </button>
          <button
            onClick={() => {}}
            className={styles.applyButton}
            type="button"
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentFilter;
