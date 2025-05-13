import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const IntroSection = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "SYSTEM_ONLINE // ACCESS_GRANTED // Welcome, operator. Analyzing digital footprint...";
  const typingSpeed = 50; // milliseconds

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      // Blinking cursor effect after typing is done
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [text]);

  return (
    <section className={`${styles.section} ${styles.header}`}>
      <h1 className={`${styles.headerTitle} glitch-text`}>[Justin Sherfey]</h1>
      <p className={styles.tagline}>
        {text}
        {text.length < fullText.length || showCursor ? (
          <span className="blinking-cursor"></span>
        ) : null}
      </p>
      <p style={{ color: "var(--primary-text-color)", marginTop: "1rem" }}>
        Navigating the digital frontier, one line of code at a time.
        Specializing in [Your Specialization 1], [Your Specialization 2], and
        crafting unique web experiences.
      </p>
    </section>
  );
};

export default IntroSection;
