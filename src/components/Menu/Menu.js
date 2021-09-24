import { PAGE_PATHS } from 'constants/paths'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = () => {
  const menu_list = [
    { id: 1, name: 'Customers', path: PAGE_PATHS.customers() },
    { id: 2, name: 'Sessions', path: PAGE_PATHS.sessions() },
  ]
  return <ul className={styles.list}>{menu_list.map(MenuItem)}</ul>
}

const MenuItem = ({ id, name, path }) => {
  return (
    <li key={id} className={styles.listItem}>
      <NavLink className={styles.link} activeClassName={styles.activeLink} to={path}>
        {name}
      </NavLink>
    </li>
  )
}
