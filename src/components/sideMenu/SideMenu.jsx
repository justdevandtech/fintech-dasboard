import './sidebarMenu.css'
import sidebarIcon from '../../assets/images/sideIcon.png';
import menuIcon1 from '../../assets/images/sidebarIcon-1.png'
import menuIcon2 from '../../assets/images/sidebarIcon-2.png'
import menuIcon3 from '../../assets/images/sidebarIcon-3.png'
import menuIcon4 from '../../assets/images/sidebarIcon-4.png'
import menuIcon5 from '../../assets/images/sidebarIcon-5.png'
import menuIcon6 from '../../assets/images/sidebarIcon-6.png'


export const SideMenu = () => {
  return (
    <section className='side-menu'>
        <div className="logo">
            <img src={sidebarIcon} alt="sidebar-icon" />
        </div>
        <div className="menu-items">
            <span>
                <img src={menuIcon1} alt="" />
            </span>
              <span>
                  <img src={menuIcon2} alt="" />
              </span>
              <span>
                  <img src={menuIcon3} alt="" />
              </span>
              <span>
                  <img src={menuIcon4} alt="" />
              </span>
        </div>
        <div className="bottomMenu">
            <span>
                <img src={menuIcon5} alt="" />
            </span>
            <span>
                <img src={menuIcon6} alt="" />
            </span>
        </div>

    </section>
  )
}
