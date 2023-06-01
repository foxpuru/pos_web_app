import { createContext, useState } from "react"

export const GuestDetailsContext = createContext()

export const GuestDetailsProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState({})
  return (
    <GuestDetailsContext.Provider value={{ orderItems, setOrderItems }}>
      {children}
    </GuestDetailsContext.Provider>
  )
}

export const GuestDetailsConsumer = GuestDetailsContext.Consumer
