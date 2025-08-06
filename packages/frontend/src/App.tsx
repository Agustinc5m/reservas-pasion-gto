import pgLogo from './assets/pg_logo.jpg';
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://www.facebook.com/profile.php?id=61577015279520" target="_blank">
          <img src={pgLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    <h1>Pasion Guanajuato</h1>
      <div className="card">
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
