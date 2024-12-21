import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import './styles.css'

export default function Card({ id, imgUrl, title, overview, codeLine, share, comments, user }) {
    return (
        <article className='card'>
            <div className='card__img'>
                <img src={imgUrl} alt='Post image' />
            </div>
            <div className='card__content'>
                <div className='content__text'>
                    <h3>{title}</h3>
                    <p>{overview}</p>
                </div>

                <div className='content__footer'>
                    <ul>
                        <li>
                            <img src={Code} alt='Code'/>
                            {codeLine}
                        </li>
                        <li>
                            <img src={Share} alt='Share' />
                            {share}
                        </li><li>
                            <img src={Chat} alt='Comments' />
                            {comments}
                        </li>
                    </ul>

                    <div className='user__footer'>
                        <img src={user.imagem} alt='User image' />
                        {user.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}