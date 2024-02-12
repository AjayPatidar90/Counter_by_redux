import { configureStore } from "@reduxjs/toolkit";
import Control from "./Control";



export const store = configureStore({
    reducer:{
        Control:Control
},
})




