import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Main = ({auth,setAuth}) => {
    const navigate = useNavigate()

    const AuthCheck = ({children}) => {
        // check apakah ada auth aktif ato tidak 

        if(!auth){
            // jika tidak aktif maka akan di redirect ke page login
            return <Navigate to="/login" />
        }

    return children

    }

    let logoutHandle = () => {
        setAuth(false)
        navigate('/login')
    }

    return (
        <AuthCheck>
           <div className="container col text-center m-10">
           <p>Welcome To Dashboard</p>
            <button className='btn' onClick={logoutHandle}>Logout</button>
           </div>
        </AuthCheck>
    )
}

export default Main
