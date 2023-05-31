import { useLayoutEffect, useRef, useState } from "react"

export function useEleDimension() {
  const eleRef = useRef(null)

  const [eleHeight, setEleHeight] = useState(0)
  const [eleWidth, setEleWidth] = useState(0)

  useLayoutEffect(() => {
    setEleHeight(eleRef?.current?.clientHeight)
    setEleWidth(eleRef?.current?.clientWidth)
  }, [])

  return { eleRef, eleHeight, eleWidth }
}
