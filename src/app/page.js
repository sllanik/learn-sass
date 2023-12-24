import Image from 'next/image'
import styles from './page.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.openingMenu}>
        <Link href={"/1.Variables"}>1.Variables</Link>
        <Link href={"/2.Nesting"}>2.Nesting</Link>
        <Link href={"/3.Imports"}>3.Imports</Link>
        <Link href={"/4.Mixins"}>4.Mixins</Link>
    </div>
  )
}
