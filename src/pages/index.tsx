import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HackerCanvas from "@/components/HackerCanvas";
import IntroSection from "@/components/IntroSection";
import PortfolioSection from "@/components/PortfolioSection";
import UpcomingProjectsSection from "@/components/UpcomingProjectsSection";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hacker Portfolio // [Justin Sherfey]</title>
        <meta name="description" content="A dark hacker-themed portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* You can create a hacker-themed favicon */}
      </Head>

      <div className={styles.canvasContainer}>
        <Suspense fallback={<div>Loading 3D Scene...</div>}>
          <HackerCanvas />
        </Suspense>
      </div>

      <main className={`${styles.main} ${styles.contentOverlay}`}>
        <IntroSection />
        <PortfolioSection />
        <UpcomingProjectsSection />
        <Footer />
      </main>
    </>
  );
}
