import {Link} from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>ELLP</h1>
            <Link to='/Eventos'>
                <button>Eventos</button>
            </Link>
        </div>
    )
}

export default Home;