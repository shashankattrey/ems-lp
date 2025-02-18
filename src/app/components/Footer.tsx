import styles from "../../styles/LandingPage.module.css"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="about" className={styles.footerLink}>About Us</a>
        <a href="terms-and-condition" className={styles.footerLink}>Terms and Conditions</a>
        <a href="privacy-policy" className={styles.footerLink}>Privacy Policy</a>
        <a href="refund-policy" className={styles.footerLink}>Refund Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
