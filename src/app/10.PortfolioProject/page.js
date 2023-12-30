import styles from './page.module.scss'


export default function Nesting() {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <nav>
                    <ul>
                        <li><a href={1}>Home</a></li>
                        <li><a href={1}>About</a></li>
                        <li><a href={1}>Contact</a></li>
                        <li><a href={1}>Blog</a></li>
                    </ul>
                </nav>

                <div className={styles.frameContainer}>
                    <div className={styles.gradient}></div>
                    <header>
                        <section className={styles.social}>
                            <div className={styles.line}></div>
                            <img src="images/sass.png" alt="sass" className={styles.sass}/>
                            <div className={styles.line}></div>
                        </section>

                        <h1>
                            Exordia Universe
                        </h1>
                    </header>
                </div>

                <section className={styles.about}>
                   <h2>
                       THE STORY
                   </h2>
                    <div className={styles.divider}></div>
                    <p>
                        Prof. Aljo has been working on his latest invention, the teleport, for years. It was a machine that could transport a person from one place to another intantaneously.
                        On the day of the final experiment, things went horribly wrong as the teleport malfunctioned and opened up gates across entire Earth, leading to a new planet called <span>Exordia</span>.
                        People from all over the world were drown into the gates, including prof. Aljo.
                    </p>
                    <p className={styles.two}>
                        When the gates closed, they found themselves stranded on Exordia, a planet full of dangerous monsters. But there was a guardian monster called Brongi, watching over humans as they learned to survive in the new world.
                    </p>
                    <img src="images/bg.png" alt="bg" className={styles.world}/>
                </section>

                <section className={styles.projects}>
                    <h1 className={styles.title}>
                        <span>NEW</span> MONSTERS
                    </h1>
                    <div className={styles.divider}></div>
                    <section className={styles.imageContainer}>
                        <div className={styles.images}>
                            <img src="/images/monOne.png" alt="one" className={styles.imgOne}/>
                            <img src="images/monTwo.png" alt="two" className={styles.imgTwo}/>
                            <img src="images/monThree.png" alt="three" className={styles.imgThree}/>
                            <img src="images/monFour.png" alt="four" className={styles.imgFour}/>

                            <img src="images/monFive.png" alt="five" className={styles.imgFive}/>
                            <img src="images/monSix.png" alt="six" className={styles.imgSix}/>
                            <img src="images/monSeven.png" alt="seven" className={styles.imgSeven}/>
                            <img src="images/monEight.png" alt="eight" className={styles.imgEight}/>
                        </div>
                    </section>
                </section>

                <section className={styles.clients}>
                    <h1 className={styles.title}>
                        <span>CL</span>IENTS<br/>
                        REVIEWS
                    </h1>

                    <section className={styles.cardsContainer}>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <p className={styles.cardInfo}>
                                    Lorem ipsLorem ipsum ery ner very nice my friend. I like the games and eveythings in betweens.eveythings in betweens.                                </p>
                                <br/>

                                    <div className={styles.userInfo}>
                                        <div className={`${styles.userImg} ${styles.imgOne}`}></div>
                                            <div className={styles.info}>
                                                <h4 className={styles.userName}>slanik</h4>
                                                <p className={styles.userHandle}>@slanik1777</p>
                                            </div>
                                    </div>
                            </div>

                            <div className={styles.card}>
                                <p className={styles.cardInfo}>
                                    Lorem ipsLorem ipsum ery ner very nice my friend. I like the games and eveythings in betweens.eveythings in betweens.                                </p>
                                <br/>

                                <div className={styles.userInfo}>
                                    <div className={`${styles.userImg} ${styles.imgTwo}`}></div>
                                        <div className={styles.info}>
                                            <h4 className={styles.userName}>Aljo_M</h4>
                                            <p className={styles.userHandle}>@aljom1</p>
                                        </div>
                                </div>
                            </div>

                            <div className={styles.card}>
                            <p className={styles.cardInfo}>
                                Lorem ipsLorem ipsum ery ner very nice my friend. I like the games and eveythings in betweens.eveythings in betweens.
                            </p>
                            <br/>

                            <div className={styles.userInfo}>
                                <div className={`${styles.userImg} ${styles.imgThree}`}></div>
                                    <div className={styles.info}>
                                        <h4 className={styles.userName}>John Witcher</h4>
                                        <p className={styles.userHandle}>@johnwitcher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <footer className={styles.footer}>
                    <div className={styles.logoContainer}>
                        <h1>Portfolio</h1>
                        <p>Lorem ipsLorem ipsum ery ner very nice my friend. I like the games and eveythings in betweens.eveythings in betweens.</p>
                    </div>

                    <div className={styles.aboutUs}>
                        <div className={styles.footerContainer}>
                            <h1>About</h1>
                            <p>News & Blogs</p>
                            <p>Features</p>
                            <p>About us</p>
                        </div>
                        <div className={styles.footerContainer}>
                            <h1>Company</h1>
                            <p>How we work</p>
                            <p>Capital</p>
                            <p>Security</p>
                        </div>
                        <div className={styles.footerContainer}>
                            <h1>About</h1>
                            <p>FAQs</p>
                            <p>Contact us</p>
                        </div>
                    </div>
            </footer>
            </div>


        </body>



)
}