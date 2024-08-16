import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image src="/images/contact.jpg" alt="contact" fill className={styles.heroImg} />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form action='' className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="">
            Message
          </textarea>
          <button>Send</button>
          </form>
        </div>
  </div>
  )
};

export default ContactPage;
