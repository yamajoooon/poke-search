import styles from './layout.module.css'
import Header from './about'

function Layout({ children }) {
    return (
      
      <div className={styles.header}>{children}</div>
    )

  }
  
export default Layout