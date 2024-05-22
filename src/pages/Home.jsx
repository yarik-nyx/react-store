import React from 'react'
import axios from 'axios'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import ItemBlock from '../components/ItemBlock'
import { Link } from 'react-router-dom'
import { Skeleton } from '../components/ItemBlock/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrPageCount, setPageCount } from '../redux/slices/filterSlice'

import Pagination from '../components/Pagination'

const Home = ({searchValue}) => {
    const dispatch = useDispatch()



    const fetchData = async () => {
        setLoading(true)

        const sort = sortId.sortProperty.replace("-", "")
        
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        
        const search = searchValue ? `search=${searchValue}` : ''

        try{
            const res = await axios.get(`https://663117eac92f351c03dc28bf.mockapi.io/items?${search}${category}&sortBy=${sort}`)
            dispatch(setPageCount(Math.ceil(res.data.length / 8)))

        } catch (err) {
            dispatch(setPageCount(1))
        }

        try {
            const res =  await axios.get(`https://663117eac92f351c03dc28bf.mockapi.io/items?page=${currentPage}&limit=8&${search}${category}&sortBy=${sort}&order=${sortId.sortType}`)

            setTimeout(() => {
                setItems(res.data)
                setLoading(false)
            }, 500)
        } catch (error) {
            setItems([])
            setLoading(false)
        }

        window.scrollTo(0, 0)
    }

    const categoriesDict = {
        1:"Processors",
        2:"Motherboards",
        3:"Videocards",
        4:"Drams",
        5:"Powerunits",
        6:"Coolings",
        7:"Ssd_hdd"
    }

    const {categoryId, categoryName} = useSelector((state) => state.filterReducer.category)

    const sortId = useSelector((state) => state.filterReducer.sort)

    const currentPage = useSelector((state) => state.filterReducer.currPageCount)

    const pageCount = useSelector((state) => state.filterReducer.PageCount)

    const setCurrentPage = (num) => {
        dispatch(setCurrPageCount(num))
    }

    const [items, setItems] = React.useState([])

    const [isLoading, setLoading] = React.useState(true)

    
    React.useEffect(() => {
        fetchData()
    },[categoryId, sortId, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
                <h2 className="content__title"> {categoryId === 0 ? 'Все комплектующие' : categoryName}</h2>
                <div className="content__items">
                    {
                        isLoading ? [...new Array(12)].map((_, i) => <Skeleton key={i}/>) :
                        items.map((value) => (
                            <Link key={value.id} to={`/${categoriesDict[value.category]}/${value.id}`}>
                                <ItemBlock 
                                    id={value.id}
                                    title={value.title} 
                                    price={value.price} 
                                    image={value.imageUrl} 
                                    letters={value.letters} 
                                    rating={value.rating}
                                    types={value.types}/>
                            </Link>
                        ))
                    }
                </div>
                <Pagination onChangePage={(num) => setCurrentPage(num)} pageCount={pageCount}/>
        </div>
    )
}

export default Home