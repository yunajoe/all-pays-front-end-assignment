import styles from "@/app/components/footer/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.section}>
          <h3>회사 소개</h3>
          <Link href="">회사소개</Link>
          <Link href="">인재채용</Link>
          <Link href="">광고문의</Link>
        </div>
        <div className={styles.section}>
          <h3>고객 센터</h3>
          <Link href="">공지사항</Link>
          <Link href="">자주묻는질문</Link>
          <Link href="">1:1문의</Link>
        </div>
      </div>

      <div className={styles.section}>
        <h3>약관 및 정책</h3>
        <Link href="">이용약관</Link>
        <Link href="">개인정보청리방침</Link>
      </div>
    </footer>
  );
}

export default Footer;
