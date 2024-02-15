import { ReactNode } from 'react';
import styles from './Layout.module.css';

import Sidebar from '../sidebar/Sidebar.component';

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

function Layout({ title, children }: LayoutProps): JSX.Element {

    return(
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.containerHeader}>
                <h1 className={styles.title}>{title}</h1>
                <hr className={styles.line}/>
                {children}
            </div>
        </div>
    )
}

export default Layout;