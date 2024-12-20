import Logo from './assets/Logo.svg';

export default function Sidebar() {
    return(
            <aside>
                <img src={Logo} alt='Codeconnect Logo' />
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Post</a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={Feed} alt='' />
                                <span>Feed</span>
                            </a>
                        </li>
                    </ui>
                </nav>
            </aside>
        );
}