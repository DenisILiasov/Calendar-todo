import {combineReducers, configureStore} from '@reduxjs/toolkit'
import daysReduser from './daysSlice'

const rootReduser = combineReducers({
    days: daysReduser,
   
})

export default configureStore({
    reducer: rootReduser,
}) 
