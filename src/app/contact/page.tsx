
import Image from "next/image";
import styles from "./contact.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact MLN Office - Get in Touch",
  description: "Contact MLN Office for availability and professional web development services.",
  openGraph: {
    title: "Contact MLN Office - Get in Touch",
    description: "Contact MLN Office for availability and professional web development services.",
    url: "https://mlnoffice.com/contact",
    images: [
      {
        url: "/images/mlnoffice_cover.webp",
        width: 800,
        height: 600,
        alt: "Contact MLN Office Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MLN Office - Get in Touch",
    description: "Contact MLN Office for availability and professional web development services.",
    images: ["/images/mlnoffice_cover.webp"],
  },
};


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
          <textarea name="" id="" defaultValue='Message'>
            
          </textarea>
          <button >Send</button>
          </form>
        </div>
  </div>
  )
};

export default ContactPage;
