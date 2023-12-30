import styles from './page.module.scss'

export default function Nesting() {
    return (
        <ul className={styles.bg}>
            <li className={`${styles.li} ${styles.one}`}>1</li>
            <li className={`${styles.li} ${styles.two}`}>2</li>
            <li className={`${styles.li} ${styles.three}`}>3</li>
            <div className={styles.box}>
                <img src="images/element.png" alt="element" className={styles.element}/>
                <p>Psychic cut</p>
                <p className={styles.pp}>0/5</p>
            </div>
            <div className={styles.box}>
                <img src="images/element.png" alt="element" className={styles.element}/>
                <p>Electro ball</p>
                <p className={styles.pp}>3/5</p>
            </div>
            <div className={styles.box}>
                <img src="images/element.png" alt="element" className={styles.element}/>
                <p>Poo dance</p>
                <p className={styles.pp}>10/10</p>
            </div>
            <div className={styles.box}>
                <img src="images/element.png" alt="element" className={styles.element}/>
                <p>Confusion</p>
                <p className={styles.pp}>1/20</p>
            </div>
        </ul>
)
}