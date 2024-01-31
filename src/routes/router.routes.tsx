import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/homePage/HomePage';

const RouterRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;