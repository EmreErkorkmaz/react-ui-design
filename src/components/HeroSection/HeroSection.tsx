import { Button } from "../Button/Button";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles["hero-container"]}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className={styles["hero-btns"]}>
        <Button
          className={styles.btns}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className={styles.btns}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className='far fa-play-circle' style={{marginLeft: '4px'}}/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
