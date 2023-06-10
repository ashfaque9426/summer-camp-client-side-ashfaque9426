import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import InstructorRoute from "./InstructorRoute";
import AddAClass from "../pages/Dashboard/InstructorDashboard/AddAClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import StudentRoute from "./StudentRoute";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dashboard/StudentDashboard/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'addAClass',
                element: <InstructorRoute><AddAClass /></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },
            {
                path: 'myEnrolledClasses',
                element: <StudentRoute><MyEnrolledClasses /></StudentRoute>
            },
            {
                path: 'mySelectedClasses',
                element: <StudentRoute><MySelectedClasses /></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute><Payment /></StudentRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/selectedClass/${params.id}`)
            }
        ]
    }
]);

export default router;