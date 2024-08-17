import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/post/1.jpg"
          alt="Post Image"
          fill
          className={styles.postImg}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/images/author/1.png"
            alt="Author: J92"
            width ={50}
            height ={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>J92</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quo nulla voluptatum dicta totam, perspiciatis vitae perferendis quod nemo error iste unde repellat aliquam at reiciendis necessitatibus. Ratione, nulla earum!
        </div>

      </div>
    </div>
  );
};

export default SinglePostPage;
