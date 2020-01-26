import { configureStore } from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
import { ExampleReducer } from './Example/slice.js'

export const store = configureStore({
  reducer: {
    example: ExampleReducer
  },
  middleware: [ thunk ]
})