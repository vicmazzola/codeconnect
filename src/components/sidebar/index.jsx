import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css';

export default function Sidebar() {
    return(
            <aside>
                <img src={Logo} alt='Codeconnect Logo' />
                <nav>
                    <ul className='sidebar-list'>
                        <li>
                            <a href='#'>Post</a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={Feed} alt='' />
                                <span>Feed</span>
                            </a>
                        </li>
                        <li>
                        <a href='#'>
                            <img src={Account} alt='' />
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Info} alt='' />
                            <span>About us</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Logout} alt='' />
                            <span>Logout</span>
                        </a>
                    </li>
                    </ul>
                </nav>
            </aside>
        );
}

