import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
