import { UseTheme } from '../../context/ThemeContext'
import './styles.scss'
import { BsArrowUpRightCircleFill,BsArrowDownCircleFill } from "react-icons/bs";

const Estatistic = () => {

  const {isDark} = UseTheme()

  return (
    <section className={`estatistic ${isDark ? "dark" : ""}`}>

      <article className='card'>
        <p>New Subscribers</p>
        <h2>5,097</h2>
        <div>
          <BsArrowUpRightCircleFill/>
          <span>+33.45%</span>
        </div>
      </article>

      <article className='card'>
        <p>Streams</p>
        <h2>47,403</h2>
        <div className='negative'>
          <BsArrowDownCircleFill/>
          <span>-112.45%</span>
        </div>
      </article>

      <article className='card'>
        <p>Engagement Rate</p>
        <h2>25.81</h2>
        <div>
          <BsArrowUpRightCircleFill/>
          <span>+6252%</span>
        </div>
      </article>

      <article className='card'>
        <p>Avg. Watch time</p>
        <h2>45,4 min</h2>
        <div>
          <BsArrowUpRightCircleFill/>
          <span>+4.46%</span>
        </div>
      </article>

    </section>
  )
}

export default Estatistic