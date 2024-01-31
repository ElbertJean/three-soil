import Layout from "../../components/layout/Layout";

function Error404():JSX.Element {

    return (
        <>
            <Layout>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                    <p style={{ color:'black', fontSize: '50px' }}>Erro, página não encontrada!</p>
                </div>
            </Layout>
        </>
    )
}

export default Error404;