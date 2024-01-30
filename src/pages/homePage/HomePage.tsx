import { useNavigate } from 'react-router-dom';

function HomePage(): JSX.Element {

    const navigate = useNavigate();

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
                <h1>Em breve, HomePage</h1>
                <button onClick={() => navigate('/')}>Voltar para login</button>
            </div>
        </>
    )
}

export default HomePage;