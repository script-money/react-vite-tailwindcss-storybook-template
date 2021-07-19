import React, { useState } from 'react'
import logo from './logo.svg'
import { Button } from './stories/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button
            primary
            label={`count is: ${count}`}
            size="large"
            onClick={() => setCount(count => count + 1)}
          ></Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-main App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
