import Layout from "../../components/layout/Layout";
import styles from "./Error404.module.css";

function Error404():JSX.Element {

    return (
        <>
            <Layout title="Ocorreu um erro &#128534;">
                <div className={styles.container}>
                    <p className={styles.paragraph}>Página não encontrada.</p>
                </div>
            </Layout>
        </>
    )
}

export default Error404;