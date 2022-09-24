import { useLayoutEffect, useMemo, useState, useEffect, useCallback } from 'react'

function useWindowSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {

    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])
  return [width, height]
}

function useMousePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const setPosition = ({ x, y }) => {
    setX(x)
    setY(y)
  }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', setPosition)
    return () => window.removeEventListener('mousemove', setPosition)
  }, [])
  return [x, y]
}








function App() {
  console.log(useWindowSize())
  console.log(useMousePosition());
  return (
    <div className="App">
      <h1> Ready</h1>
    </div>
  );
}

export default App;
