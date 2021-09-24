import { Menu } from '../Menu'
import { Logo } from '../Logo'

import styles from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <aside className={styles.aside}>
        <Logo />
        <div className={styles.menu}>
          <Menu />
        </div>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
