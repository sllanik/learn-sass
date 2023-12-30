import Image from 'next/image'
import styles from './page.module.scss'
import Link from "next/link";

export default function Home() {
  return (
      <body className={styles.bodye}>
    <div className={styles.openingMenu}>
        <div className={styles.Header}>
            <img src="images/sass.png" alt="sass" className={styles.sass}/>
            <h1>Slanik Learning Sass in 9 Projects</h1>
            <p>XII/2023 -</p>
        </div>
        <div className={styles.cards}>
            <a href={"/1.Variables"} className={styles.link}>
            <button className={`${styles.card} ${styles.cardOne}`}>
                <h2>01</h2>
                <h3>Variables</h3>
                <p>21.12.2023</p>
            </button>
            </a>
            <a href={"/2.Nesting"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardTwo}`}>
                    <h2>02</h2>
                    <h3>Nesting</h3>
                    <p>21.12.2023</p>
                </button>
            </a>
            <a href={"/3.Imports"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardThree}`}>
                <h2>03</h2>
                    <h3>Imports</h3>
                    <p>22.12.2023</p>
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
                    <p>26.12.2023</p>
                </button>
            </a>
            <a href={"/8.Interpolation"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardSix}`}>
                    <h2>06</h2>
                    <h3>Interpolation</h3>
                    <p>27.12.2023</p>
                </button>
            </a>
            <a href={"/9.Directive/2.Loop"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardSeven}`}>
                    <h2>07</h2>
                    <h3>For Loop</h3>
                    <p>28.12.2023</p>
                </button>
            </a>
            <a href={"/9.Directive/3.EachLoop"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardEight}`}>
                    <h2>08</h2>
                    <h3>Each Loop</h3>
                    <p>28.12.2023</p>
                </button>
            </a>
            <a href={"/10.PortfolioProject"} className={styles.link}>
                <button className={`${styles.card} ${styles.cardNine}`}>
                    <h2>09</h2>
                    <h3>Portfolio</h3>
                    <p>29.12.2023</p>
                </button>
            </a>
        </div>
    </div>
  </body>
  )
}
