import styles from './page.module.scss'

export default function Nesting() {
    return (
        <body className={styles.body}>
            <div className={`${styles.div} ${styles.yellow}`}>1</div>
            <div className={`${styles.div} ${styles.orange}`}>2</div>
            <div className={`${styles.div} ${styles.crimson}`}>3</div>
            <div className={`${styles.div} ${styles.red}`}>4</div>
        </body>
)
}