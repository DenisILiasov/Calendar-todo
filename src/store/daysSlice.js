import { createSlice } from "@reduxjs/toolkit";
import {createCalendare} from "../utils/createCalender";

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1

const daysSlice = createSlice(
    {
        name: 'days',
        initialState: {
            days: []
        },
        reducers:{
            renderDays(state, actions){
                const daysList = createCalendare(year, month)
                state.days.push(...daysList)
            },
            nextMonth(state, actions){
                month += 1
                if(month >= 12){
                    month = 1;
                    year += 1
                }
                const daysList2 = createCalendare(year, month)
                state.days.push(...daysList2)
            },
        }
    }
)

export const {renderDays, nextMonth, prevMonth} = daysSlice.actions;
export default daysSlice.reducer;