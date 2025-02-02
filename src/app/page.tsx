"use client";

import { useRouter } from "next/navigation";

import styles from "./survey/styles.module.css";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.header}>
          <button onClick={() => router.push("/")}>back</button>
          <h1>SURVEY</h1>
        </div>
        <div className={styles.body}>
          <h1>Hello!</h1>
          <button onClick={() => router.push("/survey/name")} className={styles.nextBtn}>
            Start journey
          </button>
        </div>
      </div>
    </>
  );
}
