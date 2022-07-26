import { Menu, SearchOutlined } from '@material-ui/icons';
import './navbar.scss';
import Logo from '../../img/logo.png';
import Kids from '../../img/kids.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <div className="profile">
                        <Menu style={{ cursor: 'pointer' }} />
                        <div className="options">
                            <span> Channels</span>
                            <span>Languages</span>
                            <span>Genres</span>
                        </div>
                    </div>
                    <img src={Logo} alt='Hotstar' />
                    <div className="profile">
                        <span>TV</span>
                        <div className="options">
                            <span>Gusto TV</span>
                            <span>Other Shows</span>
                            <span>Hotstar Specials</span>
                            <span>Quix </span>
                            <span>Star Jalsha</span>
                            <span>StarPlus</span>
                            <span>Star Vijay</span>
                            <span>Star Bharat</span>
                            <span>more...</span>
                        </div>
                    </div>
                    <div className="profile">
                        <span>Movies</span>
                        <div className="options">
                            <span>Odia</span>
                            <span>Hindi</span>
                            <span>Bengali</span>
                            <span>Telugu</span>
                            <span>Malayalam</span>
                            <span>Tamil</span>
                            <span>Marathi</span>
                            <span>English</span>
                            <span>Kannada</span>
                        </div>
                    </div>
                    <div className="profile">
                        <span>Sports</span>
                        <div className="options">
                            <span>Cricket</span>
                            <span>Football</span>
                            <span>Formula 1</span>
                            <span>Kabaddi</span>
                            <span>Hockey</span>
                            <span>Formula E</span>
                            <span>Martial Arts</span>
                            <span>Tennis</span>
                            <span>Khelo India</span>
                            <span>American Football</span>
                            <span>Athletics</span>
                            <span>Golf</span>
                        </div>
                    </div>
                    <span>Disney+</span>
                    <img src={Kids} alt='kids' style={{ height: '30px', margin: '1px 5px 0px 0px' }} />
                </div>
                <div className="right">
                    <div className="search">
                        <input placeholder='Search' />
                        <SearchOutlined style={{ cursor: 'pointer', margin: '0px -5px', color: '#F8F0E3' }} />
                    </div>
                    <button className='subscribe'>SUBSCRIBE</button>
                    <span>LOGIN</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar