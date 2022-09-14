
import './cardsecao.scss'

export default function CardSecao(props) {
    return(
            <div className='container-secao'>
                    <h3 className={props.teste}>Seção {props.secao}</h3>

                    <div className={props.classe}>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>

                        <img className='img-cores' src='/assets/images/Group 63.svg' alt='cores' />
                    </div>
            </div>
    )
}