import Banner from './assets/card_code_editor.png';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import Icon from './assets/user.png';

export default function Card() {
    return (
        <article className='card'>
            <div className='card__img'>
                <img src={Banner} alt='Post image' />
            </div>
            <div className='card__content'>
                <div className='content__text'>
                    <h3>Post title</h3>
                    <p>Post overview</p>
                </div>

                <div className='content__footer'>
                    <ul>
                        <li>
                            <img src={Code} alt='Code'/>
                            100
                        </li>
                        <li>
                            <img src={Share} alt='Share' />
                            12
                        </li><li>
                            <img src={Chat} alt='Comments' />
                            10
                        </li>
                    </ul>

                    <div className='user__footer'>
                        <img src={Icon} alt='User image' />
                        @vic
                    </div>
                </div>
            </div>
        </article>
    )
}