import { UseTheme } from "../../context/ThemeContext"
import InfoDashboard from "../InfoDashboard"
import Navbar from "../Navbar"
import './styles.scss'

const Dashboard = () => {

  const {isDark,togleTheme} = UseTheme()

  return (
    <div className="container">
      <main className={`dashboard ${isDark ? 'dashboard-dark' : 'dashboard-light'}`}>
        <Navbar/>
        <InfoDashboard/>
        <button id="togle-theme"
        onClick={togleTheme}
        >🌞</button>
      </main>
      <div className={`body ${isDark ? 'body-dark' : 'body-light'}`}></div>
    </div>
  )
}

export default Dashboard