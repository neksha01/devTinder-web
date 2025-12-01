import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider, useDispatch } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Request from "./components/Request"


function App() {


  return (
    <>
  <Provider store={appStore}>
  <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<Body/>}>
    <Route index element={<Feed/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/connections" element={<Connections/>}/>
    <Route path="/requests" element={<Request/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  </Provider>
    </>
  )
}

export default App
