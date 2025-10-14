import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EsempioStile from './EsempioStile'
import ComponenteUno from './ComponenteUno'

function App() {
  const [count, setCount] = useState(0)
  const nome = "Gohan"
  const a = 10
  const b = 20

  return (
    <>
      <EsempioStile />
      <h1>la suma de {a} + {b} es {a + b}</h1>
      <h1>que pasa pe papi me llamo {nome} y tengo {count} años</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <ComponenteUno />
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={
          () => setCount((count) => count + 1)
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
