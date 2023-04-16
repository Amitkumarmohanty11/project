import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
//import Account from './Account';


const cookies = new Cookies();

function ProtectedRoutes({ children}) {
    
    //get cookie from browser if user is logged
    const token = cookies.get("TOKEN")
    const navigate = useNavigate()

    if (token) {
        return (
            <div>
              {children}
            </div>
        )
    }
   else (
     window.location.href = '/account'
    
    )
}

export default ProtectedRoutes
