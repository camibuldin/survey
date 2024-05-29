"use client";

import { useRouter } from "next/navigation";
import styles from "../styles.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [selectedAge, setSelectedAge] = useState("");
  const router = useRouter();
  const ageOptions = ["20s", "30s", "40s", "+50"];
  const milestones = [30, 65, 94];
  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.header}>
          <button onClick={() => router.push("/survey/name")}>back</button>
          <h1>SURVEY</h1>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ width: `${50}%` }} role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestone} style={{ left: `${milestone}%` }}>
              <FontAwesomeIcon icon={faLocationPin} color="rgb(220, 190, 245)" width={7}/>
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <p>How old are you?</p>
          <div className={styles.ageBtnsDiv}>
            {ageOptions.map((age) => (
              <button key={age} onClick={() => setSelectedAge(age)} className={selectedAge === age ? styles.selected : ""}>
                {age}
              </button>
            ))}
          </div>
          <button className={styles.nextBtn} onClick={() => router.push("/survey/name")}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
