import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-grig'>
      <div className='output'>
        <div className='previous-operation'></div>
        <div className='current-operation'></div>
      </div>
      <div className='keyboard'>
        <button className='span-two'>AC</button>
        <button >DEL</button>
        <button >/</button>
        <button >1</button>
        <button >2</button>
        <button >3</button>
        <button >*</button>
        <button >4</button>
        <button >5</button>
        <button >6</button>
        <button >+</button>
        <button >7</button>
        <button >8</button>
        <button >9</button>
        <button >-</button>
        <button >.</button>
        <button >0</button>
        <button className='span-two' >=</button>
      </div>
    </div>
    </>
  )
}

export default App
