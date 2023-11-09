import React from 'react';
import styles from './Card.module.css';
import Image from './images/elipse.png'

const Card = ({ img, title, content }) => (
  <div className={styles.card}>
    <div>
      <img src={Image} alt={title} className={styles.circularImage} />
    </div>
    <div className={styles.cardContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{content}</p>
    </div>
  </div>
);

export default Card;
