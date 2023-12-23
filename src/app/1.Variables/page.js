import styles from './page.module.scss'

export default function Variables() {
    return (
        <div id={styles.body}>
            <section className={styles.container}>
                <section className={styles.card}>
                    <div className={`${styles.img} ${styles.imgOne}`}></div>
                    <p className={styles.info}>lorem jebihsfdbiofdih dsahuaidsfghwresgfsdrgsre udifh asuhfusadhmlorem jebihsfdbiofdih dssgrsgsdgfgsdfgahuaid udi  asduih pasidh fd se</p>
                </section>
                <section className={styles.card}>
                    <div className={`${styles.img} ${styles.imgTwo}`}></div>
                    <p className={styles.info}>lorem jlorem jebihsfdbiogdfhsgfsdfgsfgfdsg udifh asu fh asdumlorem jebihsfdbiofdih dssgrsgsdgfgsdfgahuaid udiih pasidh febi se</p>
                </section>
                <section className={styles.card}>
                    <div className={`${styles.img} ${styles.imgThree}`}></div>
                    <p className={styles.info}>loremlorem jebihsfdbiofdih dssgrsmlorem jebihsfdbiofdih dssgrsgsdgfgsdfgahuahuaid udifh asuh fh asduih pasidh f jebi se</p>
                </section>
                <section className={styles.card}>
                    <div className={`${styles.img} ${styles.imgFour}`}></div>
                    <p className={styles.info}>loremlorem jebihsfdbiofsfgsersh dsahuaid udifh asu fh asduimlorem jebihsfdbiofdih dssgrsgsdgfgsdfgahuaid udih pasidh f jebi se</p>
                </section>
            </section>
        </div>
    )
}