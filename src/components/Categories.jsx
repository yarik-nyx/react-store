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

    const categories = ['Все', 'Процессоры', 'Материнские платы','Видеокарты','Оперативная память','Блоки питания', 'Охлаждение компьютера', 'HDD/SDD']

    return (                       
         <div className="categories">
            <ul>
                {
                    categories.map((categoryName, i) => (
                        <li key={i} onClick={() => onClickCategory({categoryId:i, categoryName})} className={value.categoryId === i ? 'active' : ''}>
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Categories