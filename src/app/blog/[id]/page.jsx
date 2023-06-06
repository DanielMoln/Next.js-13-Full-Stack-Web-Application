import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getPostData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUserData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const post = await getPostData(params.id);
  const user = await getUserData(post.id);
  const { title, body } = post;
  const { name } = user;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{body}</p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/14578357/pexels-photo-14578357.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.name}>{name}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/14578357/pexels-photo-14578357.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
