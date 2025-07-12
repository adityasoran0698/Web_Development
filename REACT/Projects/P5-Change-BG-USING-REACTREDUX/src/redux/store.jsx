import {configureStore} from '@reduxjs/toolkit';
import bgSlice from "./../Features/changebg/BgSlice";
export const store=configureStore({
    reducer:{
        bgColor:bgSlice
    }
})