import styles from './page.module.scss'

export default function Nesting() {
    return (
        <div>
            <header className={styles.header}>
                <h1>FIGHT FOR GLORY</h1>
                <p>pidjsfh pui dsufhdspiuah dpsuihdsp oiidjsfh pui dsufhdspiuah dpsuihdsp oiidjsfh pui dsufhdspiuah dpsuihdsp oiidjsfh pui dsufhdspiuah dpsuihdsp oifhas hds šhadsšfi.</p>
            </header>

            <section className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.imgOne}></div>
                        <div className={styles.cardContent}>
                            <h1 className={styles.cardTitle}>Lunch Menu</h1>
                            <p>ouewbfpi dshfpiadsh dishfpaiosdfh šidsfh ašosdifh ašdsofsdašoif hšdsi fšisd fšijasd.</p>
                            <a href={1} className={styles.btnPrimary}>Learn More</a>
                            <a href={1} className={styles.btnPrimary}>View Menu</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgTwo}></div>
                        <div className={styles.cardContent}>
                            <h1 className={styles.cardTitle}>Breakfast Menu</h1>
                            <p>ouewbfpi dshfpiadsh dishfpaiosdfh šidsfh ašosdifh ašdsofsdašoif hšdsi fšisd fšijasd.</p>
                            <a href={1} className={styles.btnPrimary}>Learn More</a>
                            <a href={1} className={styles.btnPrimary}>View Menu</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgThree}></div>
                        <div className={styles.cardContent}>
                            <h1 className={styles.cardTitle}>Dinner Menu</h1>
                            <p>ouewbfpi dshfpiadsh dishfpaiosdfh šidsfh ašosdifh ašdsofsdašoif hšdsi fšisd fšijasd.</p>
                            <a href={1} className={styles.btnPrimary}>Learn More</a>
                            <a href={1} className={styles.btnPrimary}>View Menu</a>
                        </div>
                </div>
                    <div className={styles.card}>
                        <div className={styles.imgFour}></div>
                        <div className={styles.cardContent}>
                            <h1 className={styles.cardTitle}>Lunch Menu</h1>
                            <p>ouewbfpi dshfpiadsh dishfpaiosdfh šidsfh ašosdifh ašdsofsdašoif hšdsi fšisd fšijasd.</p>
                            <a href={1} className={styles.btnPrimary}>Learn More</a>
                            <a href={1} className={styles.btnPrimary}>View Menu</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}