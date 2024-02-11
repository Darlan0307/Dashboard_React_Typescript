import { UseTheme } from '../../context/ThemeContext'
import Estatistic from '../Estatistic'
import GraphBar from '../GraphBar'
import GraphLine from '../GraphLine'
import GraphRosc from '../GraphRosc'
import InfoGraphBar from '../InfoGraphBar'
import './styles.scss'
import { FaSmile } from "react-icons/fa";

const InfoDashboard = () => {

  const {isDark} = UseTheme()
  const date = new Date()

  return (
    <div className='info-dashboard'>
      <Estatistic/>
      <div className='container-graphs'>
        <div className={`column-1 ${isDark  ? "dark" : ""}`}>
          <InfoGraphBar/>
          <GraphBar/>
        </div>
        <div className={`column-2 ${isDark  ? "dark" : ""}`}>
          <p>Audience Satisfaction</p>
          <GraphRosc/>
          <div className='info-rosc'>
            <FaSmile/>
            <span>69%</span>
          </div>
        </div>
        <div className={`column-3 ${isDark  ? "dark" : ""}`}>
          <h3>analysis by quarter</h3>
          <p>{date.toLocaleDateString()}</p>
          <GraphLine/>
        </div>
      </div>
    </div>
  )
}

export default InfoDashboard