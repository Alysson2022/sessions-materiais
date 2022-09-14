
import './cardHobby.scss'

export default function Card() {
    return(
        <div className='page-cardHobby'>
            <div>
                <img src='' alt='img-perfil' />

                <h2> Bruno </h2>
            </div>
            <div>
                <div>
                    <div>
                        <p>Idade</p>
                        <p>33</p>
                    </div>
                    <div>
                        <p>Nascimento</p>
                        <p>1989</p>
                    </div>
                </div>

                <button>Hobby</button>
            </div>
        </div>
    )
}