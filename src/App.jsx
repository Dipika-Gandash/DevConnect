import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Error from "./components/Error"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*"element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
