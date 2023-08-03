import { createSlice } from "@reduxjs/toolkit";
import {createCalendare, createCalendareFromMobile} from "../utils/createCalender";

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
                if(window.innerWidth > 992){
                    state.days.push(createCalendare(year, month))
                }else{
                    state.days.push(createCalendareFromMobile(year, month))
                }
            },
            nextMonth(state, actions){
                month += 1
                if(month > 12){
                    month = 1;
                    year += 1
                }
                if(window.innerWidth > 992){
                    state.days.push(createCalendare(year, month))
                }else{
                    state.days.push(createCalendareFromMobile(year, month))
                }
            },
        }
    }
)

export const {renderDays, nextMonth} = daysSlice.actions;
export default daysSlice.reducer;