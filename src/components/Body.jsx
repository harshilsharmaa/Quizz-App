import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StartPage from '../views/StartPage/StartPage'
import Qizz from '../views/Qizz/Qizz'
import ProtectedRoute from './ProtectedRoute'
import Result from '../views/Result/Result'

const Body = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <StartPage/>
        },
        {
            path: "/quizz",
            element: <ProtectedRoute><Qizz/></ProtectedRoute>
        },
        {
            path: "/result",
            element: <ProtectedRoute><Result/></ProtectedRoute>
        }
    ])

  return <RouterProvider router={router}></RouterProvider>
}

export default Body