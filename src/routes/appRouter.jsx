import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/Dashboard';
import EditProfile from '../pages/EditProfile';
import Stats from '../pages/Stats';
import Profile from '../pages/Profile';
import LoginFormRHF from '../pages/LoginFormRHF';
import EmployeeFormExercise from '../pages/EFE';




export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <Profile /> },
      { path: 'profile/edit', element: <EditProfile /> },
      { path: 'stats', element: <Stats /> },
    ],
  },
  {
    path: '/login',
    element: <LoginFormRHF />
  },
  {
    path:'/LoginFormRHF',
    element: <LoginFormRHF />
  },
  {
    path: '/EFE',
    element: <EmployeeFormExercise />
  }
]);