"use client";
import { MerchantListItem } from "@/app/types/merchants";
import { formatDate } from "../../utils";
import styles from "./merchant-item.module.css";
interface MerchantItemProps {
  data: MerchantListItem;
}

function MerchantItem({ data }: MerchantItemProps) {
  const {
    address,
    bizNo,
    bizType,
    email,
    mchtCode,
    mchtName,
    phone,
    status,
    registeredAt,
    updatedAt,
  } = data;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{mchtName}</h2>
        <div className={styles.row}>
          <span className={styles.label}>가맹점 코드:</span>
          <span className={styles.value}>{mchtCode}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>사업장 번호:</span>
          <span className={styles.value}>{bizNo}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>사업장 유형:</span>
          <span className={styles.value}>{bizType}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>사업장 상태:</span>
          <span className={styles.value}>{status}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>전화번호:</span>
          <span className={styles.value}>{phone}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>이메일:</span>
          <span className={styles.value}>{email}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>주소:</span>
          <span className={styles.value}>{address}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>가맹점 등록일:</span>
          <span className={styles.value}>{formatDate(registeredAt)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>가맹점 수정일:</span>
          <span className={styles.value}>{formatDate(updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default MerchantItem;
