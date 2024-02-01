import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';

import RouterRoutes from './routes/router.routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterRoutes />
  </React.StrictMode>
);
