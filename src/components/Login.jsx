import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({setLogin,authstat}) => {
    const navigate = useNavigate()

  useEffect(() => {
    if(authstat === true){
        navigate('/dashboard')
   }
  },[])

    const clickHandle = () => {
        setLogin(true)
        navigate('/dashboard')
    }

    return (
     <div className="center col">
         <button onClick={clickHandle} className='btn'>Login to dashboard</button> 
         <p className='m-1'>or</p>
         <Link to="/">Back to main page</Link> 
     </div>
    )
}

export default Login
