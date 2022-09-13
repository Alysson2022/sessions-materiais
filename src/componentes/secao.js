
import './secao.scss'
import Card from './comps/cardSecao/cardsecao'

export default function Secao() {
    return(
        <main className='page-secao'>
            <div className='container-header'>
                <h1>Estudando ReactJS | Componentes</h1>
            </div>

            <div className='container-secoes'>

                <Card />

                <Card />
                
                <Card />

            </div>

        
        </main>
    )
}