import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
Not


const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    {path: '*', element: <NotFound />},
]);


export default router;
