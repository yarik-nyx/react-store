import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'

function Categories()
{
    const dispatch = useDispatch()
    const value = useSelector((state) => state.filterReducer.category)

    const onClickCategory = (obj) => {
        dispatch(setCategoryId(obj))
    }

    const categories = ['Processors', 'Motherboards','Videocards','Rams','PowerSupplies', 'Coolings']

    return (                       
         <div className="categories">
            <ul>
                {
                    categories.map((categoryName, i) => (
                        <li key={i} onClick={
                                () => onClickCategory({categoryId:i, categoryName})
                            } className={value.categoryId === i ? 'active' : ''}>
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Categories