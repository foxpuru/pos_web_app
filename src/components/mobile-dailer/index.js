import React from "react"
import ReactDOM from "react-dom"
import { reducer } from "./store"
import StoreProvider from "./components/StoreProvider"
import ToggleDialer from "./components/ToggleDialer/"
import Dialer from "./components/Dialer"

const initialState = { dialerOpened: false }

export const TeravozDialer = () => (
  <StoreProvider initialState={initialState} reducer={reducer}>
    <Dialer />
  </StoreProvider>
)
