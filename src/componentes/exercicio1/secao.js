
import './secao.scss'
import Card from '../comps/cardSecao/cardsecao'

export default function Secao(props) {
    return(
        <main className='page-secao'>
            <div className='container-header'>
                <h1>Estudando ReactJS | Componentes</h1>
            </div>

            <div className='container-secoes'>

                <Card secao = '1' classe = 'container-text1' />

                <Card secao = '2' classe = 'container-text2' />
                
                <Card teste='final-secao' secao = '3' classe = 'container-text3' />

            </div>

        
        </main>
    )
}