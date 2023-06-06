import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "<@>/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=400"
          fill={true}
          alt="about image"
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem
            cupiditate quisquam suscipit. Aspernatur ullam, praesentium maxime
            totam nihil fuga perferendis ipsam reiciendis iusto veniam possimus
            quo! Eius, consequatur voluptate?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem
            cupiditate quisquam suscipit. Aspernatur ullam, praesentium maxime
            totam nihil fuga perferendis ipsam reiciendis iusto veniam possimus
            quo! Eius, consequatur voluptate?
            <br />
            - Lorem ipsum ipsum
            <br />
            - Lorem ipsum ipsum
            <br />- Lorem ipsum ipsum
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
