import { createSlice, createAction } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'

const incrementBy = createAction('incrementBy')

// Thunk
const incrementByAsync = (value) => (dispatch, getState) => {
  setTimeout(() => {
    // Асинхронные действия всегда вызывают другие синхронные или асинхронные действия
    dispatch(incrementBy(value))
  }, 3000)
}


const ExampleSlice = createSlice({
  name: 'example',
  initialState: { value1: 0, value2: "" },
  reducers: {
    // Простые редьюсеры
    increment: state => { 
      state.value1++
    },
    decrement: state => {
      state.value1--
    },

    // Сложный редьюсер 
    multiply: {
      reducer: (state, action) => {
        state.value1 *= action.payload
      },
      prepare: (value) => ({ payload: value || 2 }) // fallback if the payload is a falsy value
    }
  },
  // "builder callback API"
  extraReducers: builder =>
    builder.addCase(incrementBy, (state, action) => {
      state.value1 += action.payload
    })

  // "map object API"
  //extraReducers: {
  //  [incrementBy.type]: (state, action) => {
  //    state.value1 += action.payload
  //  }
  //}
})

export const ExampleActions = { ...ExampleSlice.actions, incrementBy, incrementByAsync }
export const ExampleReducer = ExampleSlice.reducer