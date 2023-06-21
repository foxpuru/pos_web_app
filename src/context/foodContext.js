import { createContext, useState } from "react"

export const FoodDetailsContext = createContext()

export const FoodDetailsProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState({})
  return (
    <FoodDetailsContext.Provider value={{ orderItems, setOrderItems }}>
      {children}
    </FoodDetailsContext.Provider>
  )
}

export const FoodDetailsConsumer = FoodDetailsContext.Consumer
