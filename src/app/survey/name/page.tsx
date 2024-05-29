"use client";

import { useRouter } from "next/navigation";

import styles from "../styles.module.css";

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
          <p>How do you want us to call you?</p>
          <input type="text"  className="form-control"/>
          <button className={styles.nextBtn} onClick={() => router.push("/survey/age")}>Next</button>
        </div>
      </div>
    </>
  );
}
