import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Home/Registration/SignIn/SignIn";
import SignOut from "../Pages/Home/Registration/SignUp/SignUp";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import DashBoardSideBar from "../Pages/DashBoard/DashBoardSideBar";
import DashBoard from "../LayOut/DashBoard";

import Book from "../Pages/DashBoard/Book/Book";
import BookingList from "../Pages/DashBoard/BookingList/BookingList";
import Review from "../Pages/DashBoard/Review/Review";
import ProfessionalForm from "../Pages/Home/ProfessionalForm/ProfessionalForm";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path:'contact',
        element: <ProfessionalForm></ProfessionalForm>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignOut></SignOut>
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },




      
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: 'book/:id',
            element: <Book></Book>,
            
          },
          {
            path: 'bookinglist',
            element: <BookingList></BookingList>
          },
          {
            path: 'review',
            element: <Review></Review>
          }
        ]
      }
    ]
  }
]);
