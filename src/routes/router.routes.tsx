import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/homePage/HomePage';
import Map from '../pages/map/Map';
import Error404 from '../pages/error404/Error404';

const RouterRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/map" element={<Map />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoutes;