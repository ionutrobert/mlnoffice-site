
import styles from './footer.module.css';
const Footer = () => {
    return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>mlnoffice</h1>
      </div>
      <div className={styles.text}>
        <p>MLNOFFICE creative agency © All rights reserved.</p>
      </div>
    </div>
    )
  };
  
  export default Footer;