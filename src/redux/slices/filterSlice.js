import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: {
      categoryId:0,
      categoryName:'Processors'
    },
    currPageCount: 1,
    PageCount: 1,
    sort: {
        name:'популярности (DESC)', 
        sortProperty: 'rating', 
        sortType:'desc'
    }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.category.categoryId = action.payload.categoryId
      state.category.categoryName = action.payload.categoryName
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setCurrPageCount: (state, action) => {
      state.currPageCount = action.payload
    },
    setPageCount: (state, action) => {
      state.PageCount = action.payload
    }
  },
})

export const {setCategoryId, setSort, setCurrPageCount, setPageCount} = filterSlice.actions

export default filterSlice.reducer