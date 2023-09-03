// pour communiquer directement avce l'enfant san spasser par le parent  grace à redux

import { configureStore, createSlice} from "@reduxjs/toolkit"
// création de slice = nom , state et action
const comSlice = createSlice({
// nom
name:"Com",
//state
initialState:{
    question :"",
    reponse:""
},
//action
reducers :{
    sendQuestion:(state, action) => {
        state.question =action.payload
    },
    sendReponse: (state ,action) => {
        state.reponse = action.payload
    }
}
})

// on place la slice dans le store en faisant ce code on rajoutera les slices au fr et a mesure
export const mainStore = configureStore(
    {
        reducer:{
            com :comSlice.reducer
        }
    }
)