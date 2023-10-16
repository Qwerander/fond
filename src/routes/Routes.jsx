import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Contacts } from '../pages/contacts/Contacts';
import { Home } from '../pages/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
]);
