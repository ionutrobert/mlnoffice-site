import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image
          src="/images/about-hero.jpg"
          alt="About Us"
          layout="fill"
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Founded in 2014, we’ve been delivering top-notch web solutions for
            over a decade.
          </p>
        </div>
      </div>

      <section className={styles.content}>
        <div className={styles.subtitle}>
          <h2>Our Mission</h2>
        </div>
        <div className={styles.mission}>
          <p>
            Our mission is to help businesses establish a strong online presence
            through innovative web development.
          </p>
        </div>

        <div className={styles.subtitle}>
          <h2>Our Services</h2>
        </div>

        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <h3>Web Design & Development</h3>
            <p>
              Custom-built websites that not only look great but also function
              seamlessly across devices.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>E-commerce Solutions</h3>
            <p>
              Robust e-commerce platforms designed to convert visitors into
              customers.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>SEO Optimization</h3>
            <p>
              SEO services that boost your search engine ranking and drive
              organic traffic to your site.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Web Application Development</h3>
            <p>
              Building powerful web applications tailored to your business
              processes.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Maintenance & Support</h3>
            <p>Ongoing support to keep your website running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
