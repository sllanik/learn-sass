import Image from 'next/image'
import styles from './page.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <Link href={"/1.Variables"}>1.Variables</Link>
        <Link href={"/2.Nesting"}>2.Nesting</Link>
      <p>nekineki</p>
    </div>
  )
}
