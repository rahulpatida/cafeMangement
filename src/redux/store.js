
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootRedures'

const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export default store 