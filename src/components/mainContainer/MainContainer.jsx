import './mainContainer.css'
import { Container } from 'react-bootstrap'
import searchIcon from '../../assets/images/searchIcon.png'
import bellIcon from '../../assets/images/bellIcon.png'
import userIcon from '../../assets/images/user.png'
import arrowDownIcon from '../../assets/images/down-arrow.png'
import { AccountCard } from '../acountCard/AccountCard';
import { MyCards } from '../userCards/MyCards'
import { Analytics } from '../analytics/Analytics'

export const MainContainer = () => {
    return (
            <section className='interface'>
                <Container>
                <div className="header">
                    <h3>Dashboard</h3>
                    <div className="nav-icons">
                        <span>
                            <img src={searchIcon} alt="" />
                        </span>
                        <span>
                            <img src={bellIcon} alt="" />
                        </span>
                        <span>
                            <img style={{borderRadius:'50%'}} src={userIcon} alt="" />
                        </span>
                        <span>
                            <img src={arrowDownIcon} alt="" />
                        </span>
                    </div>
                </div>
                <AccountCard />
                <MyCards />
                <Analytics />
                </Container>
            </section>
    )
}
