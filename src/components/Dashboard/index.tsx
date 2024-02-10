import { UseTheme } from "../../context/ThemeContext"
import './styles.scss'

const Dashboard = () => {

  const {isDark,togleTheme} = UseTheme()

  return (
    <div className="container">
      <main className={`dashboard ${isDark ? 'dashboard-dark' : 'dashboard-light'}`}>
        <h1>teste</h1>
        <button
        onClick={togleTheme}
        >TEASDASTEA</button>
      </main>
      <div className={`body ${isDark ? 'body-dark' : 'body-light'}`}></div>
    </div>
  )
}

export default Dashboard