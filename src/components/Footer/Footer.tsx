import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <section className={styles["footer-subscription"]}>
        <p className={styles["footer-subscription-heading"]}>
          join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className={styles["footer-subscription-text"]}>
          You can unsubscribe at any time.
        </p>
        <div className={styles["input-areas"]}>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles["footer-input"]}
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className={styles["footer-links"]}>
        <div className={styles["footer-link-wrapper"]}>
          <div className={styles["footer-link-items"]}>
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Carreers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
          <div className={styles["footer-link-items"]}>
            <h2>About Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Carreers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
        </div>
        <div className={styles["footer-link-wrapper"]}>
          <div className={styles["footer-link-items"]}>
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Carreers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
          <div className={styles["footer-link-items"]}>
            <h2>About Us</h2>
            <Link to="/sign-up">How it works?</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Carreers</Link>
            <Link to="/sign-up">Investors</Link>
            <Link to="/sign-up">Terms of Services</Link>
          </div>
        </div>
      </div>
      <section className={styles["social-media"]}>
        <div className={styles["social-media-wrap"]}>
          <div className={styles["footer-logo"]}>
              <Link to='/' className={styles["social-logo"]}>
                  TRVL <i className="fab fa-typo3"></i>
              </Link>
          </div>
          <small className={styles["website-rights"]}>TRVL C 2020</small>
          <div className={styles["social-icons"]}>
              <Link to='/' className={`${styles["social-icon-link"]} ${styles.facebook}`} target="_blank" aria-label='Facebook'>
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to='/' className={`${styles["social-icon-link"]} ${styles.facebook}`} target="_blank" aria-label='Instagram'>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to='/' className={`${styles["social-icon-link"]} ${styles.facebook}`} target="_blank" aria-label='Linkedin'>
                <i className="fab fa-linkedin"></i>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
