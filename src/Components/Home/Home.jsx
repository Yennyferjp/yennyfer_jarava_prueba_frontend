import React from 'react';
import styles from './Home.module.css';
import IconPlay from './images/icon-play.png'
import { Clock } from './Clock';



function Home() {
  const handleClick = () => {
    console.log('Go There');
  }
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeLeftContainer}>
        <h1 className={styles.title}>Lorem ipsum</h1>
        <h2 className={styles.subtitle}>Neque porro quisquam</h2>
        <p className={styles.paragraph1}>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
        <p className={styles.paragraph2}>
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <button className={styles.playButton} onClick={handleClick}>
          Go there...  <img src={IconPlay} alt="Play" className={styles.icon}
          />
        </button>
      </div>
      <div className={styles.homeAnimation}>
      <Clock></Clock>
      </div>
    </section>

  );
}

export default Home;
