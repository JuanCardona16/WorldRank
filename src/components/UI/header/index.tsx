import logo from '../../../assets/Logo.svg'
import styles from './header.module.css'
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="World ranks logo"/>
    </header>
  )
}
