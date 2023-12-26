import Image from 'next/image'
import styles from './page.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.openingMenu}>
        <div className={styles.Header}>
            <img src="images/sass.png" alt="sass" className={styles.sass}/>
            <h1>Slanik Learning Sass in 10 Projects</h1>
            <p>December 2023 -</p>
        </div>
        <div className={styles.cards}>
            <a href={"/1.Variables"} className={styles.link}>
            <button className={`${styles.card} ${styles.cardOne}`}>
                <h2>01</h2>
                <h3>Variables</h3>
                <p>23.12.2023</p>
            </button>
            </a>
            <a href={"/2.Nesting"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardTwo}`}>
                    <h2>02</h2>
                    <h3>Nesting</h3>
                    <p>23.12.2023</p>
                </button>
            </a>
            <a href={"/3.Imports"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardThree}`}>
                <h2>03</h2>
                    <h3>Imports</h3>
                    <p>23.12.2023</p>
                </button>
            </a>
            <a href={"/4.Mixins"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardFour}`}>
                    <h2>04</h2>
                    <h3>Mixins</h3>
                    <p>23.12.2023</p>
                </button>
            </a>
            <a href={"/5.Extends"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardFive}`}>
                    <h2>05</h2>
                    <h3>Extends</h3>
                    <p>23.12.2023</p>
                </button>
            </a>
            <a href={"/6.Operators"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardSix}`}>
                    <h2>06</h2>
                    <h3>Operators</h3>
                    <p>23.12.2023</p>
                </button>
            </a>
        </div>
    </div>
  )
}
