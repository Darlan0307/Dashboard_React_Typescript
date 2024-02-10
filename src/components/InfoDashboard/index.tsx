import Estatistic from '../Estatistic'
import './styles.scss'

const InfoDashboard = () => {
  return (
    <div className='info-dashboard'>
      <Estatistic/>
      <div className='container-graphs'>
        <div className='teste-1'></div>
        <div className='teste-2'></div>
      </div>
    </div>
  )
}

export default InfoDashboard