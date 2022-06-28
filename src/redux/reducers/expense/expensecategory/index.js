import { createSlice } from '@reduxjs/toolkit'
import { log } from '../../../utility/helpers/common'

export const menuSlice = createSlice({
    name: 'expensecategory',
    initialState: {
        expensecategory: {
            data: []
        }
    },
    reducers: {
        expensecategoryLoad: (state, action) => {
            state.expensecategory = action?.payload
        },
          expensecategoryView: (state, action) => {
            const index = state.  expensecategory.data.findIndex(x => x.id === action.payload.id)
            state.expensecategory.data[index] = action.payload
        },
          expensecategoryUpdate: (state, action) => {
            const index = state.expensecategory.data.findIndex(x => x.id === action.payload.id)
            state.expensecategory.data[index] = action.payload
        },
          expensecategorySave: (state, action) => {
            state.expensecategory.data = [
                ...action?.payload,
                ...state?.expensecategory?.data
            ]
        },
          expensecategoryDelete: (state, action) => {
            log(action)
            const index = state.  expensecategory.data.findIndex(x => x.id === action.payload)
            state.expensecategory.data.splice(index, 1)
        }
    }
})

export const {  expensecategoryDelete, expensecategoryLoad, expensecategorySave, expensecategoryUpdate, expensecategoryView} = menuSlice.actions

export default menuSlice.reducer
