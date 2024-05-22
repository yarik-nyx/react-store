import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'



const DramComponent = () => {

    const [data, setData] = React.useState()

    const {id} = useParams()

    const navigate = useNavigate()

    const fetchComponent = async () => {
        try {
            const {data} = await axios.get(`https://663117eac92f351c03dc28bf.mockapi.io/items/${id}`)
            setData(data)
        } catch (error) {
            alert('Компонент не найден')
            navigate('/')
        }
        
    }

    React.useEffect(() => {
        fetchComponent()
    }, [])

    if(!data){
        return 
    }

    return (
        <div className='container'>
            <h1>DRAM</h1>
            <img src={data.imageUrl}/>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <p>{data.rating}</p>
        </div>
    )
}

export default DramComponent