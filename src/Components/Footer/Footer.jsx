import React from "react";
import styles from './Footer.module.css';

function Footer() {
  const handleLinkClick = () => {
    console.log('footer link');
  }

  return (
    <>
      <footer >
        <section className={styles.Footer}>
          <section className={styles.divLeft}>
            <h1>Lorem ipsum dolor amet</h1>
            <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
          </section>

          {/* Segundo div */}
          <section className={styles.divCenter}>
            <h1>Lorem ipsum dolor amet</h1>
            <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
          </section>

          {/* Tercer div */}
          <section className={styles.divRight}>
            <h1>Lorem ipsum dolor amet</h1>
            <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
          </section>
        </section>
        <section className={styles.footerEnd}>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit.
              <span
                className={styles.linkText}
                onClick={handleLinkClick}>
                Link here&nbsp;
              </span>
              Lorem ipsum
            </p>
          </section>
      </footer>
    </>
  );
}

export default Footer;
