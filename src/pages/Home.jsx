import React from 'react'
import axios from 'axios'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import ItemBlock from '../components/ItemBlock'
import { Skeleton } from '../components/ItemBlock/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrPageCount, setPageCount } from '../redux/slices/filterSlice'

import Pagination from '../components/Pagination'

const Home = ({searchValue}) => {
    const dispatch = useDispatch()

    const categories = ['Processors', 'Motherboards','Videocards','Rams','PowerSupplies', 'Coolings']


    const fetchData = async () => {
        setLoading(true)

        

        const sort = sortId.sortProperty.replace("-", "")
        
        const search = searchValue ? `search=${searchValue}` : ''

        try{
            const res = await axios.get(`http://localhost:5555/${categories[categoryId]}?${search}&sortby=${sort}&order=${sortId.sortType}`)
            dispatch(setPageCount(Math.ceil(res.data.length / 8)))

        } catch (err) {
            dispatch(setPageCount(1))
        }

        try {
            const res =  await axios.get(`http://localhost:5555/${categories[categoryId]}?page=${currentPage}&limit=8&${search}&sortby=${sort}&order=${sortId.sortType}`)

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
                <h2 className="content__title"> {categoryName}</h2>
                <div className="content__items">
                    {
                        isLoading ? [...new Array(12)].map((_, i) => <Skeleton key={i}/>) :
                        items.map((value) => (            
                                <ItemBlock 
                                    key={value.id}
                                    link={categories[categoryId]}
                                    value={value}/>
                        ))
                    }
                </div>
                <Pagination onChangePage={(num) => setCurrentPage(num)} pageCount={pageCount}/>
        </div>
    )
}

export default Home