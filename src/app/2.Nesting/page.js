import styles from './page.module.scss'

export default function Nesting() {
    return (
        <div>
          <header className={styles.container}>
              <nav>
                  <ul>
                      <li><a href="#">HOME</a></li>
                      <li><a href="#">ABOUT</a></li>
                      <li><a href="#">CONTACT</a></li>
                      <li><a href="#">REGISTER</a></li>
                  </ul>
              </nav>
          </header>
        </div>
    )
}