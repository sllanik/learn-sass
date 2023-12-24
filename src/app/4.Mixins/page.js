import styles from './page.module.scss'

export default function Nesting() {
    return (
           <section className={styles.cards}>
               <div className={styles.cardOne}>
                   <div className={styles.cardContent}>
                       <h1 className={styles.price}>$19.<span>50</span></h1>
                       <h1 className={styles.cardName}>Basic</h1>
                       <p className={styles.cardInfo}>
                           pusifnpasijdhfda idhfoiah sdšofih  šidhf šoihdf iha šdsohds šofhs dšifh.
                       </p>
                       <button>Choose</button>
                   </div>
               </div>

               <div className={styles.cardTwo}>
                   <div className={styles.cardContent}>
                       <h1 className={styles.price}>$29.<span>50</span></h1>
                       <h1 className={styles.cardName}>Standard</h1>
                       <p className={styles.cardInfo}>
                           pusifnpasijdhfda idhfoiah sdšofih  šidhf šoihdf iha šdsohds šofhs dšifh.
                       </p>
                       <button>Choose</button>
                   </div>
               </div>

               <div className={styles.cardThree}>
                   <div className={styles.cardContent}>
                       <h1 className={styles.price}>$39.<span>50</span></h1>
                       <h1 className={styles.cardName}>Premium</h1>
                       <p className={styles.cardInfo}>
                           pusifnpasijdhfda idhfoiah sdšofih  šidhf šoihdf iha šdsohds šofhs dšifh.
                       </p>
                       <button>Choose</button>
                   </div>
               </div>
           </section>
    )
}