import { UseTheme } from "../../context/ThemeContext"
import InfoDashboard from "../InfoDashboard"
import Navbar from "../Navbar"
import './styles.scss'
import { FaSun,FaMoon } from "react-icons/fa";

const Dashboard = () => {

  const {isDark,togleTheme} = UseTheme()

  return (
    <div className="container">
      <main className={`dashboard ${isDark ? 'dashboard-dark' : 'dashboard-light'}`}>
        <Navbar/>
        <InfoDashboard/>
       
        <button
        onClick={togleTheme}
        className={`togle-theme ${isDark ? 'moon' : 'sun'}`}
        >
          {isDark ?<FaMoon/> : <FaSun/>}
        </button>
      </main>
      <div className={`body ${isDark ? 'body-dark' : 'body-light'}`}></div>
    </div>
  )
}

export default Dashboard