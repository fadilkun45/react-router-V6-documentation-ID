import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()

    return (
        <div className="container text-center ">
            <h2>Page ini mengambil param dari url dan disini terdapat id dengan nomer {id} dari url </h2>
        </div>
    )
}

export default Detail
