import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import './styles.scss'
import { UseTheme } from '../../context/ThemeContext'

const InfoGraphBar = () => {

  const {isDark} = UseTheme()

  return (
    <div className={`info-graph ${isDark  ? "dark" : ""}`}>
        <p className='subtitle'>Audience</p>
        <h2>300,097</h2>
        <div>
          <BsArrowUpRightCircleFill/>
          <p>+58.31% <span>for 7 last days</span></p>
        </div>
    </div>
  )
}

export default InfoGraphBar