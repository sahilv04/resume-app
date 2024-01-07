import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './initial-state'

export const mainSlice = createSlice({
    name: 'main',
    initialState: INITIAL_STATE,
    reducers: {
        setResume: (state, action) => {
            state.resume = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setResume } = mainSlice.actions

export default mainSlice.reducer