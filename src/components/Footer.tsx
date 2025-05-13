import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub_Profile
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn_Intel
        </a>
        <a href="mailto:youremail@example.com">Secure_Comms</a>
      </div>
      <p style={{ marginTop: "1rem" }}>
        &copy; {new Date().getFullYear()} [Justin Sherfey]. All rights reserved.
        // END_OF_TRANSMISSION
      </p>
    </footer>
  );
};

export default Footer;
