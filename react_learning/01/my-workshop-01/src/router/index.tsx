import { RouteObject } from 'react-router-dom';
import Home from '../components/shared/home'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <h1>error 404 not found</h1>
    },
];

export default routes;