import { UseTheme } from '../../context/ThemeContext'
import './styles.scss'

const Navbar = () => {

  const {isDark} = UseTheme()

  return (
    <div className={`navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`}>
      <section className='profile'>
        <div> NS </div>
        <p>Darlan Martins</p>
        <button> + </button>
      </section>
    </div>
  )
}

export default Navbar