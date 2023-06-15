import React from "react"

import { useStore } from "../../store"
import { Button } from "./atoms"

export default () => {
  const [opened, dispatch] = useStore((state) => state.dialerOpened)

  const toggleDialer = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()

    if (opened) {
      dispatch({ type: "DIALER_CLOSE" })
    } else {
      dispatch({ type: "DIALER_OPEN" })
    }
  }

  return (
    <Button opened={opened} onClick={toggleDialer}>
      {opened && <button>Close</button>}
      {!opened && <button>Call</button>}
    </Button>
  )
}
