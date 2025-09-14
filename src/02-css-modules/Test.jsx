import React from "react";
import styles from "./Test.module.css";

const Test = () => {
  console.log("Test styles:", styles);
  return <div className={styles.test}>Teste CSS Modules</div>;
};

export default Test;
