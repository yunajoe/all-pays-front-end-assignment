import { ReactNode } from "react";
import styles from "./modal-background.module.css";
interface ModalBackgroundProps {
  children: ReactNode;
}

function ModalBackground({ children }: ModalBackgroundProps) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  );
}

export default ModalBackground;
