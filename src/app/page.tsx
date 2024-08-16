import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Turning Ideas into Digital Realities</h1>
        <h3>Custom Web Development Services Tailored to Your Business Needs</h3>
        <p className={styles.description}>
          With over 10 years of experience in full-stack web development, we
          specialize in creating responsive, user-friendly websites that deliver
          results. From concept to deployment, we handle everything to ensure
          your online presence is top-notch.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/lego.webp" alt="lego" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
