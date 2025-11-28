"use client";
import { usePaymentFilterModalStore } from "@/app/store/payment-filter-modal";
import { usePaymentFilterStore } from "@/app/store/payment-filter-store";
import { Payment } from "@/app/types/payment";
import { X } from "lucide-react";
import { payStatus, payTypes } from "../utils/const";
import styles from "./payment-filter.module.css";

interface PaymentFilterProps {
  originalData: Payment[];
  paymentsData: Payment[];
  setPaymentsData: React.Dispatch<React.SetStateAction<Payment[]>>;
}

function PaymentFilter({
  originalData,
  paymentsData,
  setPaymentsData,
}: PaymentFilterProps) {
  const {
    selectedPayTypes,
    setSelectedPayTypes,
    selectedPayStatus,
    setSelectedPayStatus,
  } = usePaymentFilterStore();
  const { handleFilterModalClose } = usePaymentFilterModalStore();

  const handleReset = () => {
    setSelectedPayTypes([]);
    setSelectedPayStatus([]);
    setPaymentsData(originalData);
  };
  const handleApply = () => {
    const copyData = [...originalData];
    if (selectedPayTypes.length === 0 && selectedPayStatus.length === 0) {
      setPaymentsData(copyData);
      handleFilterModalClose();
      return;
    }

    // 결제 수단과 결제 상태가 둘다 있을떄
    if (selectedPayTypes.length > 0 && selectedPayStatus.length > 0) {
      const result1 = copyData.filter((item) =>
        selectedPayTypes.includes(item.payType)
      );
      const result2 = result1.filter((item) =>
        selectedPayStatus.includes(item.status)
      );
      setPaymentsData(result2);
    }
    // 결제 수단만 잇을떄
    if (selectedPayTypes.length > 0 && selectedPayStatus.length === 0) {
      const result1 = copyData.filter((item) =>
        selectedPayTypes.includes(item.payType)
      );
      setPaymentsData(result1);
    }
    // 결제 상태만 있을떄
    if (selectedPayTypes.length === 0 && selectedPayStatus.length > 0) {
      const result1 = copyData.filter((item) =>
        selectedPayStatus.includes(item.status)
      );
      setPaymentsData(result1);
    }
    handleFilterModalClose();
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>상세 필터</h2>
          <button
            className={styles.closeButton}
            onClick={handleFilterModalClose}
          >
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
        {/* 버튼 */}
        <div className={styles.buttonContainer}>
          <button
            onClick={handleReset}
            className={styles.resetButton}
            type="button"
          >
            초기화
          </button>
          <button
            onClick={handleApply}
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
