import { ReactNode } from 'react';
import styles from './Layout.module.css';

import Sidebar from '../sidebar/Sidebar.component';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
    return(
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.containerHeader}>
                <h1 className={styles.title}>Localização de poligonos</h1>
                <hr className={styles.line}/>
                {children}
            </div>
        </div>
    )
}

export default Layout;