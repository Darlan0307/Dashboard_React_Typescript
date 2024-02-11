import { UseTheme } from '../../context/ThemeContext'
import Estatistic from '../Estatistic'
import GraphBar from '../GraphBar'
import InfoGraphBar from '../InfoGraphBar'
import './styles.scss'

const InfoDashboard = () => {

  const {isDark} = UseTheme()

  return (
    <div className='info-dashboard'>
      <Estatistic/>
      <div className='container-graphs'>
        <div className={`column-1 ${isDark  ? "dark" : ""}`}>
          <InfoGraphBar/>
          <GraphBar/>
        </div>
        <div className='column-2'>

        </div>
      </div>
    </div>
  )
}

export default InfoDashboard