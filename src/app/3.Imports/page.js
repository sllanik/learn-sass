import styles from './page.module.scss'

export default function Imports() {
    return (
        <div>
            <nav className={styles.navigation}>
                <div className={styles.logoContainer}>
                    <img src={"images/logo.png"} alt={"logo"} className={styles.logo}/>
                </div>

                <ul>
                    <li><a href={1}>HOME</a></li>
                    <li><a href={1}>ABOUT</a></li>
                    <li><a href={1}>GALLERY</a></li>
                    <li><a href={1}>CONTACT</a></li>
                </ul>
            </nav>

            <main className={styles.main}>
                <section>
                    <h1>EXORDIA UNIVERSE</h1>
                    <p>Fight for glory</p>
                    <button>Play now</button>
                </section>
            </main>

            <section className={styles.card}>
                <div className={styles.cardContent}>
                    <h1>MONSTERS</h1>
                    <p>Hop into our christmas specials with 2 - 1 offer. Available through 25th of December.</p>
                    <a href={1}>Buy Now</a>
                </div>
                <img src={"images/photographer.png"} alt={"monster"} className={styles.photographer}/>            </section>

            <section className={styles.card}>
                <img src={"images/item.png"} alt={"item"} className={styles.photographer}/>
                <div className={styles.cardContent}>
                    <h1>ITEMS</h1>
                    <p>Hop into our christmas specials with 2 - 1 offer. Available through 25th of December.</p>
                    <a href={1}>Buy Now</a>
                </div>
            </section>

            <section className={styles.gallery}>
                <h1>THE INSIDE LOOK OF THE UNIVERSE</h1>

                <div className={styles.images}>
                    <img src={"images/ena.png"} alt={"ena"}/>
                    <img src={"images/dva.png"} alt={"dva"}/>
                    <img src={"images/tri.png"} alt={"tri"}/>
                    <img src={"images/stiri.png"} alt={"stiri"}/>
                    <img src={"images/pet.png"} alt={"pet"}/>
                    <img src={"images/sest.png"} alt={"sest"}/>
                </div>
            </section>

            <footer className={styles.footer}>
                <form>
                    <input type={"text"} placeholder={"Name"}/>
                    <input type={"email"} placeholder={"Email"}/><br/>
                    <textarea></textarea><br/>
                    <a href={1}>Send Message</a>
                </form>
            </footer>
        </div>
    )
}