import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Post = ({ title, description, link }) => {
  return (
    <Link className={styles.container} href={link}>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.pexels.com/photos/14578357/pexels-photo-14578357.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt=""
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.body}
          link={`/blog/${post.id}`}
        />
      ))}
    </div>
  );
};

export default Blog;
