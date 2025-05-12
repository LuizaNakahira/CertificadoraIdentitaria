import {Link} from 'react-router-dom';

function Eventos() {
    return(
        <div>
            <h1>Eventos ELLP</h1>
            {/*Itens*/}

            <Link to='/EventosEspecificos'>
                <button>Ir para terceira pagina</button>
            </Link>
        </div>
    )
}

export default Eventos;