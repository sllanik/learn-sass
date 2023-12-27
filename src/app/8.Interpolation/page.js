import styles from './page.module.scss'

export default function Nesting() {
    return (
        <ul>
            <li className={`${styles.li} ${styles.one}`}>1</li>
            <li className={`${styles.li} ${styles.two}`}>2</li>
            <li className={`${styles.li} ${styles.three}`}>3</li>
        </ul>
    )
}