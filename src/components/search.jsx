import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify';


const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams(`username=`);
    const [profile,setProfile] = useState()
    const [search] = useSearchParams()


    const searchHandle = () => {
        fetch(`https://api.github.com/users/${search?.get('username')}`)
            .then((res) => {
                if(res.status >= 400){
                    toast.error('error')
                }
                return res.json()
            }).then((res) => {
                console.log(res)
                setProfile(res?.avatar_url)
            })
    }
  
    return (
    <div className='center col'>
        
        <h1>Query Param Example</h1>

        <p style={{marginTop: '5px', marginBottom: '5px'}}>ini adalah contoh menambahkan query param dan mengambil query param pada Url dengan reactjs router</p>

       <div>
       <input type="text" placeholder='search Github Profile' onChange={(v) => setSearchParams(`username=${v.target.value}`) } />
       <button onClick={searchHandle}>search</button>
       </div>

        {
            !profile ?  "" : <img src={profile} alt="profile" className='avatar-img' />

        }

    </div>
  )
}

export default Search