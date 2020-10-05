import styles from './layout.module.css'
import Header from './develop/about'

function Layout({ children }) {
    return (
      
      <div className={styles.header}>{children}</div>
    )

  }
  
export default Layout