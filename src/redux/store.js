import { configureStore } from '@reduxjs/toolkit'
import mainReducer from "./main/reducer"

export default configureStore({
    reducer: { main: mainReducer, },
})