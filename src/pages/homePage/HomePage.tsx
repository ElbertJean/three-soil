import Layout from "../../components/layout/Layout";

function HomePage(): JSX.Element {

    return(
        <>
            <Layout>
                <div style={{ display:' flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                    <p style={{color: '#001633', fontWeight:' bold', fontSize: '50px'}}>Em breve, React Leaflet</p>
                </div>
            </Layout>
        </>
    )
}

export default HomePage;