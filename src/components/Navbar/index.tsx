import { UseTheme } from '../../context/ThemeContext'
import './styles.scss'
import { FaInbox,FaMicrophone,FaCube } from "react-icons/fa";
import { TbAlertSquareFilled,TbReportSearch } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdContacts } from "react-icons/io";
import { RiEyeCloseFill } from "react-icons/ri";
import { BiSolidBinoculars } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';

const linksHome = [
  {
    id:1,
    icon:<FaInbox/>,
    name:'Inbox',
    label:0
  },
  {
    id:2,
    icon:<TbAlertSquareFilled />,
    name:'Alerts',
    label:2
  },
  {
    id:3,
    icon:<GrOverview/>,
    name:'Overview',
    label:0
  }
]

const linksPodcast = [
  {
    id:4,
    icon:<FaMicrophone />,
    name:'Episods',
    label:0
  },
  {
    id:5,
    icon:<MdPermMedia />,
    name:'Media',
    label:0
  },
  {
    id:6,
    icon:<TfiMenuAlt />,
    name:'Meterials',
    label:0
  },
  {
    id:7,
    icon:<IoMdContacts />,
    name:'Contacts',
    label:0
  },
]

const linksAnalytics = [
  {
    id:8,
    icon:<RiEyeCloseFill />,
    name:'Subscribers',
    label:34
  },
  {
    id:9,
    icon:<BiSolidBinoculars />,
    name:'Channels',
    label:0
  },
  {
    id:10,
    icon:<FaCube />,
    name:'Integrations',
    label:0
  },
  {
    id:11,
    icon:<TbReportSearch />,
    name:'Reports',
    label:7
  },
]

const Navbar = () => {

  const ref = useRef<HTMLDivElement | null>(null)
  const [isMobile,setIsMobile] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const {isDark} = UseTheme()

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 1100){
        if(ref.current){
          ref.current.classList.add('navbar-mobile')
          setIsMobile(true)
        }
      }else{
        if(ref.current){
          ref.current.classList.remove('navbar-mobile')
          setIsMobile(false)
        }
      }
    }

    handleResize()

    return ()=> window.removeEventListener('resize',handleResize)
  })

  const togleWidthMenu = () =>{
    ref.current?.classList.toggle('open')
    setIsMenuOpen(prevState => !prevState)
  }

  return (

    <>
      {isMobile && (
      <button 
      className={`menu ${isDark ? 'menu-dark' : 'menu-light'}`}
      onClick={togleWidthMenu}
      >
        {!isMenuOpen ? <TiThMenu/> : <IoCloseCircleSharp/>}
      </button>
    )}

    <div className={`navbar ${isDark ? 'navbar-dark' : 'navbar-light'}`} ref={ref}>
      <section className='profile'>
        <div> 
          <span>NS</span>
          <p>Darlan Martins</p>
        </div>
        
        <button> + </button>
      </section>

      <nav className={`links-home ${isDark ? 'links-home-dark' : 'links-home-light'}`}>
        {linksHome.map((link) => (
          <button key={link.id} className='btn-link'>
            {link.icon}
            <p>{link.name}</p>
            {link.label !== 0 ? <span>{link.label}</span> : null}
          </button>
        ))}
      </nav>

      <h3 className='subtitle'>Podcast</h3>

      <nav className={`links-home ${isDark ? 'links-home-dark' : 'links-home-light'}`}>
        {linksPodcast.map((link) => (
          <button key={link.id} className='btn-link'>
            {link.icon}
            <p>{link.name}</p>
            {link.label !== 0 ? <span>{link.label}</span> : null}
          </button>
        ))}
      </nav>

      <h3 className='subtitle'>Analytics</h3>

      <nav className={`links-home ${isDark ? 'links-home-dark' : 'links-home-light'}`}>
        {linksAnalytics.map((link) => (
          <button key={link.id} className='btn-link'>
            {link.icon}
            <p>{link.name}</p>
            {link.label !== 0 ? <span>{link.label}</span> : null}
          </button>
        ))}
      </nav>

      <section className='info-navbar'>
        <div> 
          <span>
          <FaMicrophone />
          </span> 
          <p>PodCaster</p>
        </div>
        
        <button> <CiMenuKebab/> </button>
      </section>
    </div>
    </>
  )
}

export default Navbar