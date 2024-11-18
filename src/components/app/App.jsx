import './App.css'
import Login from '../loginPage/login/Login'
import Intro from '../loginPage/intro/Intro'

function App() {
  return (
    <>
      {/* <div className="container">
          <Intro/>
          <Login/>
      </div> */}
      <div className="container">
        <div className="left">
          <Intro/>
        </div>
        <div className="right">
          <Login/>
        </div>
      </div>
    </>
  )
}

export default App
