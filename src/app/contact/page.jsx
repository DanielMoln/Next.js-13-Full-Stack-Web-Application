import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "<@>/components/button/Button";
const Contacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            type="text"
            placeholder="Message"
            cols={30}
            rows={10}
            className={styles.textArea}
          />

          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
