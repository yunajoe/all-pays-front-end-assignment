import Link from "next/link";
import styles from "./header.module.css";
function Header() {
  return (
    <nav className={styles.nav}>
      <p>올페이즈 결제 시스템</p>
      <ul className={styles.menuList}>
        <Link href="/">대시보드</Link>
        <Link href="/payments">결제&정산 관리</Link>
        <Link href="/merchants">가맹점 관리</Link>
      </ul>
    </nav>
  );
}

export default Header;
